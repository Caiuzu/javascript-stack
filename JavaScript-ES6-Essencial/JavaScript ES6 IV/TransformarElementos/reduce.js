const arr = [1, 2, 3, 4, 5];

arr.reduce((total, value) => total += value, 0);
// 15


const students = [
    {name: "John", grade: 7},
    {name: "Jenny", grade: 5},
    {name: "Peter", grade: 4}
];

let total = students.reduce((totalGrades, student) => totalGrades += student.grade, 0); //totalGrades é o meu retorno
console.log(total);


let totalMedia = students.reduce((totalGrades, student) => totalGrades += student.grade, 0) / students.length; //totalGrades é o meu retorno
console.log(totalMedia);

let names = students.reduce((studentNames, student) => studentNames += student.name + ' ', ''); //studentNames é o meu retorno
console.log(names);