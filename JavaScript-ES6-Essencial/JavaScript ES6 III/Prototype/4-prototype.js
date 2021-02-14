function Pessoa(name) {
    this.name = name;
    return {
        name: 'Teste'
    };
}
const p2 = new Pessoa('Bruna');
//exibe a palavra 'Teste'
console.log(p2.name);


/* apenas um exemplo de não recomendação*/
String.prototype.split;
'124646'.split('');
// (6) ["1", "2", "4", "6", "4", "6"]

//quebra a string
String.prototype.split = function () {
    console.log('Ixi..');
}

// ao chamarmos novamente
'124646'.split('');
//teremos "Ixi.." como saída, pois modificamos o prototype da função. Não é recomendado realizar esta ação.
// É recomendado criar a própria definição
