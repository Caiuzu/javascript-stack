## Aula 4 - Aplicando conceitos Promises e Fetch

### Callbacks e Promises

#### [Callbacks](./callbacks.js)

- No javascript é comum usar funções de callback para executar algo após alguma tarefa assíncrona ter sido executada.

```javascript
// callback
// maneira tradicional de callback
function doSomething(callback) {
    setTimeout(function () {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        // did other thing
        callback('Second data');
    }, 1000);
}

// execução de maneira sequencial das funções com callback (callback hell)
function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');
            try {
                doOtherThing(function (data) {
                    var processedData2 = data.split('');
                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2)
                        }, 1000);
                    }
                );
            } catch (err) {
                // handle error
            }
        }
    catch
        (err)
        {
            // handle error
        }
    }
);
} catch
(err)
{
    // handle error
}
}

// chamando as funções
doAll();
```

#### [Promises](./promises.js)

```javascript
new Promise((resolve, reject) => {
})
```

- Um objeto promise guarda a promessa de que a função que gerou ele irá em algum momento no futuro terminar e te
  retornar uma resposta.
- Ela pode ser uma resposta positiva ou negativa. O promise pode ser passado para outras funções ou retornado.
- Para evitar os diversos callback usamos promises.
- Os estados de uma promises são:
    - Pending: Quando está em execução
    - Fulfilled: Quando terminou de executar
    - Rejected: Quando ocorreu algum erro
- Para tratar os erros usamos o método .catch que irá receber uma função para o tratamento
- Promise.race: cria uma Promise contendo diversas Promise e trazer o retorno da primeira que resolver entre elas.
- Promise.all: Processa múltiplas Promises de maneira paralela e tratar o retorno de todas posteriormente

```javascript
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
```

### Fetch, Async/Await e EventEmitter

#### [Fetch](./Fetch)

- fetch só irá disparar um erro caso aconteça um erro de rede e não seja possível realizar a requisição.
- O retorno da invocação da função fetch é uma Promise.

```json
// data.json
{
  "data": [
    1,
    2,
    3
  ]
}
```

```javascript
// exibe no catch apenas erros de rede
// retorno do fetch é uma promise
fetch('/data.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json()
        } else {
            throw new Error('Request error')
        }
    })
    .then(data => console.log(data))
    .catch(error => {
        console.log('Erro: ', error)
    });
```

#### [Async/Await](./async_await.js)

- Async: Uma forma de criar promises mais fácil
- Await: A palavra reservada await pode ser usada dentro de uma função criada utilizando a palavra async e para aguardar
  a resolução de uma promise.

```javascript
const simpleFunc = async () => {
    // throw new Error('Error')
    return 12345;
}

simpleFunc()
    .then(data => {
        console.log(data)
    })
    .cathc(error => {
        console.log(error);
    })

// promise para teste de await
const asyncTime = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(123456);
        }, 1000);
    });

const simpleAsyncTime = async () => {
    const data = await asyncTime();
    return data;
}

// processamento assincrono como se fosse sincrono com o await
const simpleAsyncFetch = async () => {
    const data = await asyncTime();
    console.log(data);

    const dataJson = await fetch('/data.json')
        .then(responseStream => {
            if (responseStream.status === 200) {
                return responseStream.json()
            } else {
                throw new Error('Request error')
            }
        })
        .then(data => console.log(data))
        .catch(error => {
            console.log('Erro: ', error)
        });
    return dataJson;
}

// usando promise.all, para executar em paralelo
const simpleAsyncFetch = async () => {
    const data = await Promise.all([
        asyncTime(),
        fetch('/data.json')
            .then(responseStream => {
                if (responseStream.status === 200) {
                    return responseStream.json()
                } else {
                    throw new Error('Request error')
                }
            })
            .then(data => console.log(data))
            .catch(error => {
                console.log('Erro: ', error)
            });
])
    ;

    return data;
}
```

## Aplicando e praticando os conceitos

### EventEmitter

- Programação assíncrona com o node
- A diferença entre o método on e once de uma instância EventEmitter é que um subscreve uma função a todas as
  ocorrências de um evento, o outro apenas para a primeira ocorrência.

```javascript
//node-script.js
// Instanciar ou extender o events
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', {user: 'Daniel'});

// execute
// server node node-script.js
```

```javascript
//node-script.js
const EventEmitter = require('events');

// class, extendendo e simplificando
class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({user: 'Daniel'});

// execute
// server node node-script.js
```