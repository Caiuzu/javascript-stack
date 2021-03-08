## Aula 6 - Tratamento e exceções

### Como identificar os erros

Uma maneira de capturar erros no javascript é utilizando try/catch e também impede que o programa pare sua execução caso
ocorra algum erro

```javascript
// erro-1.js

// erro: hoisting para constantes não existe
console.log('Start')
try {
    console.log(name);
    const name = 'Daniel';
} catch (err) {
    console.log('Error: ', err)
}
console.log('End')
```

```javascript
// erro-2.js

// customizando mensagens de erro
try {
    const myError = new Error('Custom message');
    throw myError;
} catch (err) {
    console.log('Error: ', err)
}

```

```javascript
// erro-3.js

// extendendo classe de erro
class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}

try {
    const myCustomError = new CustomError({
        message: 'Custom message',
        data: {
            type: 'Server error'
        }
    });

    throw myCustomError;
} catch (err) {
    if (err.data.type === 'Server error') {
        console.log('Error: ', err)
        console.log('Error Data: ', err.data)
    } else {
        console.log('Generic Error: ', err)
    }
}
```

### Debugging parte I

Exemplos práticos utilizado o debugger do navegador Chrome

- Console
- Network
- Sources
- Elements
- Breakpoints

### Debugging parte II

Exemplos práticos utilizado o debugger do navegador Chrome

- Console
- Network
- Sources
- Elements
- Breakpoints
- Tipos de console
    - console.log('Log normal')
    - console.warning('Alerta')
    - console.error('Erro): Mostrar logs de erro no console do navegador.
    - console.trace: Indica em qual lugar o console está
    - console.group e console.groupEnd: Agrupa informações
    - console.time e console.timeEnd: Exibe tempo de execução de um trecho de código
    - console.table(['Daniel', 'Digital Innovation One']): Formata os dados em tabela
    - console.log('%c style log', 'color: blue'): permitir estilizar a mensagem