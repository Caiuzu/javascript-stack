//var test = 'example'; // forma antiga de se declarar variáveis
const test = 'example'; // usar let e const são as novas formas

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        const test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`)
})();
