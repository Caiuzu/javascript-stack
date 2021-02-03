const students = [{name: 'grace', grade: 7}, {name: 'Jennifer', grade: 4}, {name: 'Paul', grade: 10}];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7); // filtra e joga os valores dentro de student
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos');
console.log(students);
