/**
 * 将创建对象的功能封装，client不需要知道对象的类，只需要知道传入的类型
 */
abstract class Animal {
    public walk() {
    }
}
class Dog extends Animal {
    public walk() { }
}
class Cat extends Animal {
    public walk() { }
}
enum ANIMAL_TYPE {
    DOG,
    CAT
}

class AnimalFactory {
    static createAnimal(type: ANIMAL_TYPE): Animal {
        let animal: Animal = null;
        switch (type) {
            case ANIMAL_TYPE.CAT:
                animal = new Cat();
                break;
            case ANIMAL_TYPE.DOG:
                animal = new Dog();
                break;
            default:
        }
        return animal;
    }
}

function main(): number {
    AnimalFactory.createAnimal(ANIMAL_TYPE.DOG);
    return 0;
}
