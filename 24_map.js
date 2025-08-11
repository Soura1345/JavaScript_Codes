const numbers = [1,2,3,4,5];

console.log(numbers.map(square));
console.log(numbers.map(cube));

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}

const student = ["sOuRa", "sOuMeN", "sUmAn", "sOuViK"];
const studentsUpper = student.map(upperCase);
const studentLower = student.map(lowerCase);
const studentCapatalize = student.map(capitalize);

console.log(studentLower)

function lowerCase(element){
    return element.toLowerCase();
}

function upperCase(element){
    return element.toUpperCase();
}

function capitalize(element){
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase(element.length)
}

const dates = ["2024-1-10", "2025-2-12", "2026-3-14", "2027-4-16"];

const formatDate = dates.map(formatDates);
console.log(formatDate)

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}