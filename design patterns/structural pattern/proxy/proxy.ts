
abstract class Subject {
    abstract request(): void 
}

class RealSubject extends Subject{
    request() {
    }
}

class Proxy extends Subject{
    private _realSubject: RealSubject;
    preRequest() {

    }

    request() {
        this.preRequest();
        this._realSubject.request();
        this.afterRequest();
    }

    afterRequest() {
    }
}

function main() {
    let proxy: Proxy = new Proxy();
    proxy.request();
}