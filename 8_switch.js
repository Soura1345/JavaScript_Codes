let testScore = 76
let letterGrade

switch(true){
    case testScore >= 90:
        letterGrade = 'A';
        break;
    case testScore >= 80:
        letterGrade = 'B';
        break;
    case testScore >= 70:
        letterGrade = 'C';
        break;
    case testScore >= 60:
        letterGrade = 'D';
        break;
    case testScore >= 50:
        letterGrade = 'E';
        break;
    default:
        letterGrade = 'F'
        break;
}

console.log(letterGrade);