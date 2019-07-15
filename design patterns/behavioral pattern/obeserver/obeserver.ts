
type State = number;

class Subject {
    protected _objList: Observer[];
    private _state: State;
    attach(observer: Observer) : void{
        this._objList.push(observer);
    }

    detach(observer: Observer): void {
        let index = -1;
        for (let i = 0; i < this._objList.length; i++) {
            const elem: Observer = this._objList[i];
            if (elem == observer) {
                index = i;
                break;
            } 
        }
        this._objList.splice(index, 1);
    }

    notify(): void {
        this._objList.forEach((observer: Observer)=>{
            observer.update(this._state);
        })
    }
    getState(): State {
        return this._state;
    };

    setState(state: State): void {
        this._state = state;
        this.notify();
    }
}

class Observer {
    update(state: State) {
        //do something
    }
}

function main() {
    let subject: Subject = new Subject();
    let a: Observer = new Observer();
    let b: Observer = new Observer();
    subject.attach(a);
    subject.attach(b);
    
    subject.setState(20);
}
