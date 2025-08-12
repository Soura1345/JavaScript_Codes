// class mathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }

//     static getCircumfernce(radius){
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius){
//         return this.PI * Math.pow(radius,2);
//     }
// }

// console.log(mathUtil.PI);
// console.log(mathUtil.getDiameter(10));
// console.log(mathUtil.getCircumfernce(10));
// console.log(mathUtil.getArea(10));

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        return (User.userCount === 1) ? console.log(`There is ${User.userCount} user online.`) : console.log(`Ther are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`Hello, my usename is ${this.username}`)
    }
}

const user1 = new User("Soura");
const user2 = new User("Neal");
const user3 = new User("Bobby");

// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);



user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount()