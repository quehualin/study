
class Director {
    static _instance: Director;
    static instance() {
        if (!this._instance) {
            this._instance = new Director();
        }
        return this._instance;
    }
}

abstract class Beverage {
    protected _beverage: Beverage;
    constructor(beverage: Beverage) {
        this._beverage = beverage;
    }
    abstract cost(): number; 
    abstract getDescription(): string
}

class Milk extends Beverage {
    cost(): number {
        return this._beverage.cost() + 1.0;
    }
    getDescription(): string {
        return this._beverage.getDescription() + 'milk';
    }
}
