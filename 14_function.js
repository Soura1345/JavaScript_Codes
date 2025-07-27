// let a = window.prompt("enter the first element: ");
// a = Number(a);
// let b = window.prompt("Enter the second element:");
// b = Number(b);

function add(x,y){
    return x + y;
}
// console.log("The add result :",add(a,b))

function subtract(x,y){
    return x - y;
}
// console.log("The subtract result :",subtract(a,b))

function multiply(x,y){
    return x * y;
}
// console.log("The multiply result :",multiply(a,b))

function divide(x,y){
    if(x === 0){
        return null;
    }
    else{
        return x / y;
    }
}
// console.log("The divide result :",divide(a,b))

function check(number){
    return number % 2 === 0 ? true : false
}
// console.log(check(20))

function isValid(email){
    return email.includes("@" && ".com") ? true : false
}
console.log(isValid("palsourashis@gmail.com"))