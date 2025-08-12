const person1 = {
    name: "Sourashis",
    favFood: "guava",
    sayHello: function(){
        console.log(`Hi! I am ${this.name}`)
    },
    eat: function(){
        console.log(`${this.name} is eating ${this.favFood}`)
    },
}

person1.sayHello();
person1.eat()

// THIS FUNCTION IS NOT WORK BY ARROW FUNCTION **