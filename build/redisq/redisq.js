"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __importDefault(require("redis"));
class RedisQ {
    constructor(defaults = undefined) {
        this.client = redis_1.default.createClient(defaults);
    }
    sendToQueue(queueName, message, callback) {
        if (typeof message !== 'string') {
            process.nextTick(() => {
                throw new Error('message must be of type string');
            });
        }
        this.client.publish(queueName, message, (err, data) => {
            if (data === 0) {
                this.client.hmset(queueName, queueName, message, (err1, res) => {
                    callback(err, err1, res, data);
                });
            }
        });
    }
    consume(queueName, callback) {
        this.client.hgetall(queueName, (err, res) => {
            this.client.subscribe(queueName);
            callback(queueName, res);
            this.client.on('message', callback);
        });
    }
    drain() {
        this.client.disconnect();
    }
}
exports.default = RedisQ;
