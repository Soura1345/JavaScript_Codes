// function hello(){
//     console.log("hello")
// }

// hello();

// const hello = function(){
//     console.log("hello");
// }
// hello()

// const hello = (name, age) => {
//     console.log(`Hello ${name}`);
//     console.log(`you are ${age} years old`);
// }
// hello("Sourashis", 20);

// setTimeout(() => console.log("hello"),3000)

const number = [3,6,1,5,2,4]

const square = number.map((element) => Math.pow(element,2));
console.log(square)

const cube = number.map((element) => Math.pow(element,3));
console.log(cube)

const isEven = number.filter((element) => element % 2 === 0);
console.log(isEven)

const isOdd = number.filter((element) => element % 2 !== 0);
console.log(isOdd);

const maxNum = number.reduce((accumulator, element) => Math.max(accumulator, element));
console.log(maxNum)

const minNum = number.reduce((accumulator, element) => Math.min(accumulator, element));
console.log(minNum);

const total = number.reduce((accumulator, element) => {
    return accumulator + element;
})

console.log(`The total of this array is ${total}`);