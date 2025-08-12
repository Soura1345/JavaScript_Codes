const person1 = {
    firstName: "Sourashis",
    lastName: "Pal",
    age: 20,
    isStudent: true,
    sayHello: () => {
        console.log("Hi! i am sourashis")
    },
    eat: () => {
        console.log(`I'm eating a burger`)
    },
}

const person2 = {
    firstName: "Neal",
    lastName: "Day",
    age: 20,
    isStudent: true,
    sayHello: () => {
        console.log("Hello is am Neal...")
    },
    eat: () => {
        console.log(`I'm eating a pizza`)
    },
}

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.isStudent);

person1.sayHello()
person1.eat()
person2.sayHello()
person2.eat()