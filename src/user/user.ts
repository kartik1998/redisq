export default class User {
    private name: string = "unknown";
    private age: number = 20;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setAge(age: number): void {
        this.age = age
    }

    public getAge(): number {
        return this.age;
    }
}