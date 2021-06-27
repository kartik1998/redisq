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
        this.client.publish(queueName, message, callback);
    }
    consume(queueName, callback) {
        this.client.subscribe(queueName);
        this.client.on('message', callback);
    }
}
exports.default = RedisQ;
