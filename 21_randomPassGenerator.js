function generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolChars = "~!@#$%^&*";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumber ? numbersChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        window.alert(`password length atlest 1`)
    }
    if(allowedChars.length === 0){
        window.alert(`atleast 1 of the set must be selected`)
    }

    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 10;
const includeLowercase = false;
const includeUppercase = false;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumber, 
                                  includeSymbols);

console.log(`Generste password: ${password}`);