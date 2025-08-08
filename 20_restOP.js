// function openFridge(...foods){
//     console.log(...foods);
// }

// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";

// openFridge(food1, food2, food3, food4)

// const food = getFood(food1, food2, food3, food4)

// console.log(food)

// function sum(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// function getAvg(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result/ numbers.length;
// }

// const total = getAvg(75,82,89,93,42)

// console.log(total)

function conbineStrings(...string){
    return string.join(" ")
}

const fullname = conbineStrings("Mr.", "Sourashis", "Pal");

console.log(fullname)