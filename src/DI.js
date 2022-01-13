// Dependency Injection

class Car {
    constructor(brand,price,engine){
        this.brand = brand
        this.price = price
        this.engine = engine
    }
}

class Engine{
    constructor (cc,model) {
        this.cc =cc
        this.model= model
    }
}

const engine = new Engine(2000,2018)

const car = new Car("BMW",3000000,engine)