import redis from 'redis';

export default class RedisQ {
  private client: any;

  constructor(defaults: any = undefined) {
    this.client = redis.createClient(defaults);
  }

  public set(key: string, value: string): void {
    this.client.set(key, value);
  }

  public get(key: string, callback: any): void {
    this.client.get(key, (err, reply) => {
      callback(err, reply);
    });
  }
}
