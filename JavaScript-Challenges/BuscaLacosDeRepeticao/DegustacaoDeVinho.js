let wineNumber = gets();
let correctAnswers = 0;

let correctAnswersList = (gets().split(' ')).filter(correctAnswers => correctAnswers.includes(wineNumber));
correctAnswers = correctAnswersList.length;

console.log(correctAnswers);