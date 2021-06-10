"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redisq_1 = __importDefault(require("./redisq/redisq"));
const queue = new redisq_1.default();
queue.set('kartik', '20');
queue.get('kartik', (err, reply) => {
    console.log(err, reply);
});
