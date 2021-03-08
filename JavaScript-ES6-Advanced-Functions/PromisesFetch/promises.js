// Promises
const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        // simulando retorno de erro
        // throw new Error('something went error');

        setTimeout(function () {
            // did something
            resolve('First data');
        }, 1000);
    });

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        // simulando retorno de erro
        // throw new Error('otherthing went error');

        setTimeout(function () {
            // did other thing
            resolve('Second data');
        }, 1000);
    });

// chamando as funções sequencialmente
doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    }) // sequenciando a segunda promisse para ser executada após a primeira
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));


// chamando as funções em paralelo e realizando algo após a execução de ambas
Promise.all([doSomethingPromise(), doOtherThingPromise()])
    .then(data => {
        console.log(data[0].split(''));
        console.log(data[1].split(''));
    })
    .catch(error => console.log('Ops', error));

// Executando todas as promises, mas retornando a primeira que conseguir resolver
Promise.race([doSomethingPromise(), doOtherThingPromise()])
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log('Ops', error));