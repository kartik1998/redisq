"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const user_1 = __importDefault(require("./user/user"));
const scan = prompt_sync_1.default();
let testCases = Number(scan());
while (testCases-- > 0) {
    const A = scan()
        .split(' ')
        .map((num) => parseInt(num));
    const user = new user_1.default('ken', A[0]);
    console.log(user);
}
