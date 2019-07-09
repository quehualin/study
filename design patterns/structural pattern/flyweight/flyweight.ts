
class Flyweight {
    public operation() {}
}

class FlyweightFactory {
    static _instance: FlyweightFactory;
    private _flyweightPool: Object;

    constructor() {
        this._flyweightPool = {};
    }

    static instance() {
        if (!this._instance) {
            this._instance = new FlyweightFactory();
        }
        return this._instance;
    }

    getFlyweight(type: string): Flyweight {
        return this._flyweightPool[type];
    }
}

function main() {
    let factory: FlyweightFactory = FlyweightFactory.instance();
    let flyweight: Flyweight = factory.getFlyweight('one');
    flyweight.operation();
}
