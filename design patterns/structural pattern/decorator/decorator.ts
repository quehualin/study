/**
 * NOTE: 装饰者与被装饰者有同样的接口
 */
class Component {
    protected _comp: Component;
    operation(): void {
    }
}

class ConcreteComponent extends Component{
    constructor(component: Component) {
        super();
        this._comp = component;
    }
    operation(): void {
        console.log('this operation')
        this._comp.operation();
    }
}

function main() {
    let component: Component = new Component();
    let concreteComp: ConcreteComponent = new ConcreteComponent(component);
    // 装饰者与被装饰者应有同样的 operation 接口
    concreteComp.operation();
}

main()