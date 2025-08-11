const prices = [5,30,10,25,15,20];
const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`)

/* Here, accumulator means the previous one and element is the next one like in firt iteration the accumulator is 5 and the element is 30, so it return 35. For the next iteration the accumulator is 35 and the element is 10, so it return 45. Like this way the process continue and the final result comes to 105. */
function sum(accumulator, element){
    return accumulator + element;
}

const grades = [75,50,90,80,65,95]

const maxValue = function(accumulator, element){
    return Math.max(accumulator, element);
}

const minValue = function(accumulator, element){
    return Math.min(accumulator, element)
}

console.log(grades.reduce(maxValue));
console.log(grades.reduce(minValue));