const programador = [
    {
    nome: 'Carlos',
    idade: '32',
    tecnologias: [
        {nome: 'C++', especialidade: 'Desktop'},
        {nome: 'Python', especialidade: 'Data Science'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
}
]


const nomeTecnologias = programador.map((programador) => {
    return programador.tecnologias
})

console.log(programador);
console.log(nomeTecnologias);


// const objectMap = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]))
// const myObject = { a: 1, b: 2, c: 3 }
//
// console.log(objectMap(myObject, v => 2 * v))