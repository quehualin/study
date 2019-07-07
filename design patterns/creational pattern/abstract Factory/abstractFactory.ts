/**
 * 一个工厂生产多种产品
 */
abstract class TV {
}
/* 电视机 */
class Television extends TV{
}
/* 电冰箱 */
class Refrigerator {
}

abstract class Factory {
}

class HaierFactory extends Factory {
    createTelevision(): Television {
        return new Television();
    }

    createRefrigerator(): Refrigerator {
        return new Refrigerator();
    }
}

function main() {
    let factory: HaierFactory = new HaierFactory();
    //创建电视
    let tv: Television = factory.createTelevision();
    //创建冰箱
    let refrigerator: Refrigerator = factory.createRefrigerator();
}