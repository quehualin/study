/** 
 * 对象适配器
*/
interface Target {
    request(): void;
}
class ObjectAdapter implements Target{
    private _adaptee: Adaptee;
    constructor(adaptee: Adaptee) {
        this._adaptee = adaptee;
    }
    request(): void {
        this._adaptee.specialRequest();
    }
}
class Adaptee {
    specialRequest(): void{
        console.log('adaptee specialRequest\n');
    }
}

/** 
 * 类适配器
 * NOTE：由于ts不能多重继承，故这里用接口代替
*/
class ClassAdapter extends Adaptee implements Target {
    request():void {
        this.specialRequest();
    }
}

function main() {
    let adaptee: Adaptee = new Adaptee();
    let target: Target = new ObjectAdapter(adaptee);
    target.request();
}
