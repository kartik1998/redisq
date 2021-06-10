"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __importDefault(require("redis"));
const client = redis_1.default.createClient({ host: 'localhost', port: '6379' });
client.on('error', function (error) {
    console.error(error);
});
client.set('key', 'value', redis_1.default.print);
client.get('key', redis_1.default.print);
