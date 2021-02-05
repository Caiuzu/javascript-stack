function fn() {
    return 'Code Here';
}

const arrowFn = () => 'Code Here'; // return implícito
const arrowFn2 = () => {
    // Mais de uma expressão
    return 'Code here'; //return explicito sempre que tiver mais de uma expressão
}

// Funções tambem são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop); //não muito utilizável, mas function ainda é um objeto por baixo dos panos, por isso conseguimos colocar propriedades nele

// Receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam);

logFnResult(fn);

// Receber e retonar funções | basicamente o mesmo funcionamento de currying
const controlFnExec = fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executa Fn
handleFnExecution(); // Não executa Fn

// controlFnExec como funcao
function controlFnExecc(fnParam) {
    return function (allowed) {
        if (allowed) {
            fnParam();
        }
    }
}

//teste simples com arrow function
const x = 2;
const someValues = (x, y) => {
    let a = 2 + x;

    console.log(a);
    return a * y;
}
console.log(someValues(x, x));

//loggar elementos de um array de objetos com forEach em arrow function
const funcionarios = [{nome: 'Caio', idade: 55}, {nome: 'Bertran', idade: 14}, {nome: 'Amanda', idade: 18}];
funcionarios.forEach(w => {
    console.log(w.nome);
});

//forEach com arrow function
const values = [1, 2, 3, 4];
values.forEach(count => {
    let a = 2 + count;
    console.log(a);
});


