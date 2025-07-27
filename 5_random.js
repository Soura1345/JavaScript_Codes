const label1 = document.getElementById("label1")
const label2 = document.getElementById("label2")
const label3 = document.getElementById("label3")
let count = '*'

document.getElementById("btn").onclick = function(){
    const min = 1
    const max = 6
    let randomNum1 = Math.floor(Math.random() * max) + min;
    let randomNum2 = Math.floor(Math.random() * max) + min;
    let randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1
    label2.textContent = randomNum2
    label3.textContent = randomNum3
}

document.getElementById("resetBtn").onclick = function(){
    count = '*';
    label1.textContent = count
    label2.textContent = count
    label3.textContent = count
}