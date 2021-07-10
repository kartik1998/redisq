import redis from 'redis';
import { generateRandomString } from '../lib/utility';

export default class RedisQ {
  private client: any;
  private defaults: any;

  constructor(defaults: any = undefined) {
    this.defaults = defaults;
    this.client = redis.createClient(defaults);
  }

  public sendToQueue(queueName: string, message: string, callback: any): void {
    if (typeof message !== 'string') {
      process.nextTick(() => {
        throw new Error('message must be of type string');
      });
    }

    this.client.publish(queueName, message, (err, data) => {
      if (err) throw err;
      if (data === 0) {
        this.client.hmset(queueName, generateRandomString(), message, (err1, res) => {
          return callback(err1, res);
        });
      }
      return callback(err, 'OK');
    });
  }

  public consume(queueName: string, callback: any): void {
    this.client.hgetall(queueName, (err, res) => {
      if (err) throw err;
      this.client.subscribe(queueName);
      if (res) Object.values(res).forEach((val) => callback(queueName, val));
      process.nextTick(() => {
        if (res) {
          const delClient = redis.createClient(this.defaults);
          delClient.hdel(queueName, Object.keys(res));
        }
      });
      this.client.on('message', callback);
    });
  }

  public drain(): void {
    this.client.disconnect();
  }
}
