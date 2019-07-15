
class Command {
    protected _receiver: Receiver;
    constructor(receiver: Receiver) {
        this._receiver = receiver;
    }
    execute() {
        this._receiver.action();
    }
}

class ConcreteCommand extends Command{
}

class Receiver {
    action() {
        console.log('receiver action');
    }
}

class Invoker {
    protected _command: Command;
    constructor(command: Command) {
        this._command = command;
    }
    call() {
        this._command.execute();
    }
}

function main() {
    let receiver: Receiver = new Receiver();
    let command: ConcreteCommand = new ConcreteCommand(receiver);
    let invoker: Invoker = new Invoker(command);
    invoker.call();
}
