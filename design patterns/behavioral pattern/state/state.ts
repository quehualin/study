
class State {
    handle() {

    }
}

class ConcreteStateA extends State{
    private _instance: State;
    static instance() {
        if (!this._intance) {
            this._instance = new ConcreteStateA();
        }
        return this._instance;
    }
    handle(context: Context) {
        //do something
        context.changeState(ConcreteStateB.instance());
    }
}

class ConcreteStateB extends State{
    private _instance: State;
    static instance() {
        if (!this._intance) {
            this._instance = new ConcreteStateA();
        }
        return this._instance;
    }
    handle(context: Context) {
        //do something
        context.changeState(ConcreteStateA.instance());
    }
}

class Context {
    private _state: State;
    changeState(state: State): void {
        this._state = state;
    }

    request(): void {
        this._state.handle();
    }
}

function main() {
    let context: Context = new Context();
    context.request();
    context.request();
}
