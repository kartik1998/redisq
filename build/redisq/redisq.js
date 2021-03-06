'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const redis_1 = __importDefault(require('redis'));
const utility_1 = require('../lib/utility');
class RedisQ {
  constructor(defaults = undefined) {
    this.defaults = defaults;
    this.client = redis_1.default.createClient(defaults);
  }
  sendToQueue(queueName, message, callback) {
    if (typeof message !== 'string') {
      process.nextTick(() => {
        throw new Error('message must be of type string');
      });
    }
    this.client.publish(queueName, message, (err, data) => {
      if (err) throw err;
      if (data === 0) {
        this.client.hmset(queueName, utility_1.generateRandomString(), message, (err1, res) => {
          callback(err1, res);
        });
      }
      callback(err, 'OK');
    });
  }
  consume(queueName, callback) {
    this.client.hgetall(queueName, (err, res) => {
      if (err) throw err;
      this.client.subscribe(queueName);
      if (res) Object.values(res).forEach((val) => callback(queueName, val));
      process.nextTick(() => {
        if (res) {
          const delClient = redis_1.default.createClient(this.defaults);
          delClient.hdel(queueName, Object.keys(res));
        }
      });
      this.client.on('message', callback);
    });
  }
  drain() {
    this.client.disconnect();
  }
}
exports.default = RedisQ;
