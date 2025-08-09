// let number = [1, 2, 3, 4, 5,]

// number.forEach(cube)
// number.forEach(display)

// function display(number){
//     console.log(number)
// }

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function square(element, index, array){
//     array[index] = Math.pow(element,2);
// }

// function cube(element, index, array){
//     array[index] = Math.pow(element,3);
// }

let fruits = ["apple", "banana", "orange", "coconut"];

fruits.forEach(firstCapital)
fruits.forEach(display)

function firstCapital(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function toLowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function toUpperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element)
}