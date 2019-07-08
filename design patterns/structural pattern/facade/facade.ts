
class SystemA {
    operation(): void {}
}
class SystemB {
    operation(): void {}
}
class SystemC {
    operation(): void {}
}
class Facade {
    private _systemA: SystemA;
    private _systemB: SystemB;
    private _systemC: SystemC;
    constructor() {
        this._systemA = new SystemA();
        this._systemB = new SystemB();
        this._systemC = new SystemC();
    }
    request(): void {
        this._systemA.operation();
        this._systemB.operation();
        this._systemC.operation();
    }
}

function main() {
    let facade: Facade = new Facade();
    facade.request();
}

main();