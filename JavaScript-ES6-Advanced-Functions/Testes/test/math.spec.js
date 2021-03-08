// math.spec.js
// Não possui uma ferramenta de *assert*
// E o *assert* é um pouco limitado, como alternativa temos o *chai*
const assert = require('assert');
const Math = require('../src/math.js');

let value = 0;

describe('Math class', function () {
    // hooks
    // permitir reiniciar uma variável antes de cada teste
    beforeEach(function () {
        value = 0;
    })

    // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
    // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
    // importante utilizar o done() para async e await, pois assim ele espera o timeout para dar o resultado do teste
    it('Sum two numbers', function (done) {
        const math = new Math();

        // é possível alterar o timeout do mocha, o padrão é 2000ms.
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
            let equal = assert.equal;
            equal(value, 10);
            done();
        });
    });

    // mocha permite deixar anotado os testes futuros
    // it('Multiply two numbers');

    // mocha executa apenas esse teste
    // it.only('Multiply two numbers', function() {});

    // mocha desconsidera esse teste
    // it.skip('Multiply two numbers', function() {});

    it('Multiply two numbers', function () {
        const math = new Math();

        let equal = assert.equal;
        equal(math.multiply(value, 5), 0);
    });

    // mocha permite deixar anotado os testes futuros
    it('Divide two numbers');
});