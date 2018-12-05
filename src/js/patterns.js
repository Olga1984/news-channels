// Creational Pattern
// Factory
import {APIKEY, BASE_URL} from "./constants";

class Factory {
    create(channel) {
        const request = new Request(channel);
        request.fetch();
    }
}

class Request {
    constructor(channel) {
        this.channel = channel;
        };
    fetch() {
        fetch(`${BASE_URL}${this.channel}&sortBy=top${APIKEY}`);
    }
}

// const factory = new Factory();
// const cnnChannel = factory.create('mtv-news');
// const guardianChannel = factory.create('bbc-news');
// console.log('first mtv-news and bbc-news requests make factory pattern');


// structural
// decorator
class Cake {
    constructor() {
        this.price = 10;
    }
    getPrice() {
        return this.price;
    }
}
class CakeDecorator extends Cake {
    constructor(cake) {
        super();
        this.cake = cake;
    }

    getPrice() {
        return this.cake.getPrice()+3;
    }
}
class ChokoDecorator extends CakeDecorator {
    constructor(cake) {
        super(cake);
    }

    getPrice() {
        return super.getPrice() + 5;
    }
}
const cake = new Cake();
const decorateCake = new CakeDecorator(cake);
const decorateCakeWithChoko = new ChokoDecorator(decorateCake);
console.log(decorateCakeWithChoko.getPrice(), 'decorateCakeWithChoko.getPrice()');

// behavioral
// observer

class Star {
    constructor() {
        this.fans = [];
    }
    sendFoto(photo) {
        this.fans.forEach((fan) => {
            fan.notify(photo);
        })
    }
    addFan(fan){
            this.fans.push(fan);
        }
    }
    class Fan {
        constructor(behavior) {
            this.behavior = behavior;
        }
        notify(photo) {
         this.behavior(photo);
        }

    };

const star = new Star();
const fan1 = new Fan(()=>console.log('WOW mountain'));
const fan2 = new Fan(()=>console.log('WOW!'));
star.addFan(fan1);
star.addFan(fan2);
star.sendFoto('I am on the mountain');
console.log(star);