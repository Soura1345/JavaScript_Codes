/* ... is the spread operator which allows an array or 
string to be expanded into seperate element */

let number = [1, 2, 3, 4, 5];

let maximun = Math.max(...number);
let minimum = Math.min(...number);

console.log(maximun);
console.log(minimum);

let username = "Sourashis Pal";
let letters = [...username];

console.log(letters.join(''));

let fruit = ["apple","orange", "banana"]
let newFruit = [...fruit];

console.log(newFruit)