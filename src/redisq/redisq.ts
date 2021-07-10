import redis from 'redis';
import { generateRandomString } from '../lib/utility';

export default class RedisQ {
  private client: any;

  constructor(defaults: any = undefined) {
    this.client = redis.createClient(defaults);
  }

  public sendToQueue(queueName: string, message: string, callback: any): void {
    if (typeof message !== 'string') {
      process.nextTick(() => {
        throw new Error('message must be of type string');
      });
    }

    this.client.publish(queueName, message, (err, data) => {
      if (data === 0) {
        this.client.hmset(queueName, generateRandomString(), message, (err1, res) => {
          callback(err, err1, res, data);
        });
      }
    });
  }

  public consume(queueName: string, callback: any): void {
    this.client.hgetall(queueName, (err, res) => {
      this.client.subscribe(queueName);
      Object.values(res).forEach(val => callback(queueName, val));
      this.client.on('message', callback);
    });
  }

  public drain(): void {
    this.client.disconnect();
  }
}
