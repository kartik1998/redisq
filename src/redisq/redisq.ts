import redis from 'redis';

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
    this.client.publish(queueName, message, callback);
  }

  public consume(queueName: string, callback: any): void {
    this.client.subscribe(queueName);
    this.client.on('message', callback);
  }
}
