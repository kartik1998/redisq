"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        this.name = 'unknown';
        this.age = 20;
        this.name = name;
        this.age = age;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setAge(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
exports.default = User;
