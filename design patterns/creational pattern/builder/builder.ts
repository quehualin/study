/*
* 产品较为复杂，分多个子组件组成，不同的步骤，不同的组件组成不同的产品
应用场景：(游戏皮肤)在很多游戏软件中，地图包括天空、地面、背景等组成部分，人物角色包括人体、服装、装备等组成部分，可以使用建造者模式对其进行设计，通过不同的具体建造者创建不同类型的地图或人物。*/
class Product {
    public setOne() {};
    public setTwo() {};
    public setThree() {};
}

class Builder {
    protected _product: Product;
    stepOne() {
        this._product.setOne();
    }
    stepTwo() {
        this._product.setTwo();
    }
    stepThree() {
        this._product.setThree();
    }
    getResult(): Product {
        return this._product;
    }
}
class ConcreteBuilder extends Builder{
    stepOne() {
    }
    stepTwo() {
    }
    stepThree() {
    }
    getResult(): Product {
        return this._product;
    }
}

class Director {
    private _builder: Builder;
    setBuilder(builder: Builder): void {
        this._builder = builder;
    }
    //构造
    construct() {
        this._builder.stepOne();
        this._builder.stepTwo();
        this._builder.stepThree();
        return this._builder.getResult();
    }
}

function main() {
    let builder: Builder = new ConcreteBuilder();
    let director: Director = new Director();
    director.setBuilder(builder);
    let product: Product = director.construct();
}