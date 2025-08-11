// const numbers = [1,2,3,4,5,6,7];

// const evenNum = numbers.filter(isEven);
// const oddNum = numbers.filter(isOdd);

// console.log(evenNum);
// console.log(oddNum);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }
let ade;
// const age = [16,17,18,19,18,21,20,60];

// const adult = age.filter(isAdult);
// const child = age.filter(isChild);

// console.log(adult);
// console.log(child);

// function isAdult(element){
//     return element >= 18;
// }

// function isChild(element){
//     return element < 18;
// }

const words = ["apple", 
                "orange", 
                "banana", 
                "kiwi",
                "pomegrante", 
                "coconut"
];

const shortWord = words.filter(getShortWord);


console.log(shortWord);


function getShortWord(element){
    return element.length <= 6;
}

const getLongWord = function(elements){
    return elements.length > 6;
}
console.log(words.filter(getLongWord));