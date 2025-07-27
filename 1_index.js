//User Input

// let username

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }


//Type Convertion

// let age = window.prompt("What's your age :")
// age = Number(age)
// age += 1

// console.log(age, `it's a ${typeof(age)}`)

// let x=""
// let y=""
// let z=""

// x=Number(x)
// y=String(y)
// z=Boolean(z)

// console.log(x,typeof(x))
// console.log(y,typeof(y))
// console.log(z,typeof(z))

const PI = 3.14
let radius , circumference

document.getElementById("tap").onclick = function(){
    radius = document.getElementById("myNo").value 
    radius = Number(radius)
    circumference = 2 * PI * radius
    document.getElementById("myH3").textContent = `The circumference is : ${circumference} cm`
}