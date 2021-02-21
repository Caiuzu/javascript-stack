const arr = [1, 3, 3, 4, 3];
const hasSomeEverNumber = arr.some(value => value % 2 === 0);
// True

const students = [
    {name: "John", grade: 7},
    {name: "Jenny", grade: 5},
    {name: "Peter", grade: 4}
];

console.log(students.some(student => student.grade >= 7)); // some

console.log(students.find(student => student.grade >= 7)); // find
console.log(students.findIndex(student => student.grade >= 7)); // findIndex