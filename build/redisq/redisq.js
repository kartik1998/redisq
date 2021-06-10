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
    set(key, value) {
        this.client.set(key, value);
    }
    get(key, callback) {
        this.client.get(key, (err, reply) => {
            callback(err, reply);
        });
    }
}
exports.default = RedisQ;
