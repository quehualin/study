
class Mediator {
    protected _map: Object;
    register(name: string, colleague: Colleague) {
        this._map[name] = colleague;
        colleague.setMediator(this);
    }
    operation(toWho: string, content: any): boolean {
        let colleague: Colleague = this._map[toWho];
        if (!colleague) {
            console.error('can not find colleague');
            return false
        }
        colleague.receiveMsg(content);
        return true;
    }
}

class Colleague {
    protected _mediator: Mediator;
    operation() {
    }

    setMediator(mediator: Mediator) {
        this._mediator = mediator;
    }

    sendMsg(name: string, content: any) {
        this._mediator.operation(name, content);
    }

    receiveMsg(content: any) {
        console.log('receive msg : ', content);
    }
}

class ConcreteColleagueA extends Colleague{
}

class ConcreteColleagueB extends Colleague{
}

function main() {
    let mediator: Mediator = new Mediator();
    let a: ConcreteColleagueA = new ConcreteColleagueA();
    let b: ConcreteColleagueB = new ConcreteColleagueB();
    mediator.register('a', a);
    mediator.register('b', b);
    a.sendMsg('b', 'i am a');
}
