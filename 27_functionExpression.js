setTimeout(function(){
    console.log("hello");
}, 300);

const numbers = [1, 2, 3, 4, 5, 6]

const square = numbers.map(
    function(element){
        return Math.pow(element, 2);
    }
);

console.log(square);

const cube = numbers.map(
    function(numbers){
        return Math.pow(numbers,3);
    }
);

console.log(cube);

const evenNum = numbers.filter(
    function(element){
        return element % 2 === 0;
    }
);

console.log(evenNum);

const oddNum = numbers.filter(
    function(element){
        return element % 2 !== 0;
    }
);

console.log(oddNum);

const addNum = numbers.reduce(
    function(accumulator,element){
        return accumulator + element;
    }
);

console.log(addNum);

