let fullName = "Sourashis Pal";

// console.log(userName.charAt(2))

// console.log(userName.indexOf("s"))

// console.log(userName.lastIndexOf("s"))

// console.log(userName.length)

// userName = userName.trim();
// console.log(userName)

// console.log(userName.toUpperCase())

// console.log(userName.toLowerCase())

// console.log(userName.repeat(4));

// let result = userName.endsWith(" ");

// if(result){
//     console.log("you username can't end with ' '");
// }else{
//     console.log(userName);  
// }

// let phoneNum = "123-456-7890"
// phoneNum = phoneNum.replaceAll("-"," ")
// console.log(phoneNum);

// let phoneNum = "123-456-7890"
// phoneNum = phoneNum.padStart(15, "0")
// console.log(phoneNum);

// let phoneNum = "123-456-7890"
// phoneNum = phoneNum.padEnd(15, "0")
// console.log(phoneNum);

// let firstName = fullName.slice(0, 9)
// let lastName = fullName.slice(-3)
// console.log(firstName);
// console.log(lastName);

// let firstName = fullName.slice(0, fullName.indexOf(" "))
// let lastName = fullName.slice(fullName.indexOf(" ")+1)
// console.log(firstName);
// console.log(lastName);

const email = "palsourashis04@gmail.com"

let userName = email.slice(0,email.indexOf("@"))
let extension = email.slice(email.indexOf("@")+1)

console.log(userName);
console.log(extension);