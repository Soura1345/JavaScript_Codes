const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function() {
    age = myText.value;
    age=Number(age);
    let x = (age >= 18) ? window.alert(`you'r old enough to enter this site`) : window.alert(`you must have to 18+ to enter this site`)
    resultElement.textContent = x
}