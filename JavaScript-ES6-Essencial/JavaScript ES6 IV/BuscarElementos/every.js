const arr = [1, 2, 3, 4, 5];

const allEvenNumbers = arr.every(value => value % 2 === 0);
console.log(allEvenNumbers);
// False

const students = [
    {name: "John", grade: 7},
    {name: "Jenny", grade: 5},
    {name: "Peter", grade: 4}
];

console.log(students.every(student => student.grade <= 7));
console.log(students.find(student => student.grade <= 7)); // find