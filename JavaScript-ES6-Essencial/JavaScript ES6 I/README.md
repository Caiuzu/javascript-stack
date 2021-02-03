# JavaScript I: Introdução

### 1 - História e conceitos:

- Lançado em **Setembro de 1995**:
    - Primeiramente foi chamado de Mocka, LiveScript e após algum tempo JavaScript como forma de marketing;


- Criado por **Brendan Eich** (Ajudou a fundar a Mozilla);


- **ECMAScript** O que é?
    - É uma especificação de linguagem, ou seja, ela define os padrões para uma linguagem de programação, e o JavaScript
      é a implementação desses padrões.
    - [TC39](https://github.com/tc39/proposals) é o comité responsável pela evolução de ECMAScript. Nesse comitê são
      realizadas as discussões e propostas de futuras atualizações.
    - O [Babel](https://babeljs.io) é um trans-compilador JavaScript gratuito e de código aberto usado principalmente
      para converter o código ECMAScript 2015+ numa versão compatível com versões anteriores do JavaScript que pode
      ser executada por mecanismos JavaScript mais antigos.


- **Conceitos da Linguagem:**
    - **Linguagem interpretada**, ou seja, o código é executado de cima para baixo e o seu resultado é exibido diretamente
      sem passar pelo processo de compilação.
    - Linguagem de **tipagem fraca**: não há verificação em todas as operações (é possível utilizar o _operador de soma_
      por exemplo entre uma `string` e um `number`).
    - Linguagem de **tipagem dinâmica**: O tipo das variáveis podem ser mutadas ao longo da sua utilização (uma variável
      iniciada como int pode ser transformada em ‘string’).
        - Uma boa prática em solução a esta tipagem é o [TypeScript](https://typescriptlang.org/). Ele é um superset
          que adiciona funcionalidades que o JS não tem por padrão(Interface, Enuns, permite tipo generics).

- **Funções de primeira classe e ordem maior**:
    - Quer dizer que a função pode ser atribuada a uma variavel, estrutura de dados e passada por argumento ou
      retornadas por outras funções;

  ```JavaScript
    /* Irá logar "Hello World" no terminal */
    function getName() {
        return 'Hello World';  
    }
  
    function logFn(fn) {
        console.log(fn);
    }
    
    const logFnResult = logFn;  // atribuindo a function a uma variavel
      
    logFnResult(getName());     // a variavél agora pode replicar o comportamento da function e pode receber argumentos
  
   //const arr = [logFn];       //consigo passar como elemento de um array
  ```
- **Closure** (Escopo Léxico) :
    - É a capacidade de uma função lembrar do ambiente em qual ela foi criada;
        - No JS existem 3 tipos de escopos:
            - Escopo Global;
            - Escopo de função;
            - Escopo de Bloco: veio com a implementação do `const` e do `let`;

        **Exemplo de Closure:** [1-closure.js](./Closure/1-closure.js).
      
        - Neste exemplo está fácil vermos de onde vem a variável, porém ao longo do crescimento do código,
          utilizar `${exemplo}` pode ser trabalhoso;
        - **É aconselhável utilizar funções puras**: (uma função que recebe um parâmetro e retorna algo).

      ```JavaScript
      
              const exemplo = 'Essa variável';
      
              function concatenaString(minhaString) {
                  minhaString = "O valor da variável exemplo é:" + minhaString + ".";
                  return minhaString;
              }
      
              console.log(concatenaString(exemplo));
      ```
---
### 2 - Currying, Hoisting, Imutabilidade, Tipos e Variáveis:
- #### **Currying:**
    - É uma técnica de transformação de uma função que recebe múltiplos parâmetros de forma que ela pode ser chamada como uma cadeia de funções que recebem somente um parâmetro cada.

    **Função sem Currying:** [1-currying.js](./Currying/1-currying.js)
    ```JavaScript
        function soma(a, b){
            return a + b;
        }
        
        soma(2,2);
        soma(2,3);
        soma(2,4);
        soma(2,5); // notamos que o primeiro parâmetro se repete, se aplicarmos o currying 
    
    ```
    
    **Função com Currying:** [2-currying.js](./Currying/2-currying.js)
    ```JavaScript
        function soma(a) {
            return function (b) {
                return a + b;
            }
        }
        
        const soma2 = soma(2); //a
        soma2(2); //b
        soma2(3); //b
        soma2(4); //b
        soma2(5); //b
    ```

---
- #### **Hoisting:**
    - O Hoisting ocorre quando seu código Javascript é compilado : Basicamente, todas as **DECLARAÇÕES** (_as atribuições não_) de variáveis são movidas para o topo de seu escopo local (se foram declaradas dentro de uma função, por exemplo) ou para o topo do escopo global (se foram declaradas fora de uma função).

  **Hoisting em variáveis:** [1-hoisting.js](./Hoisting/1-hoisting-variaveis.js)
    ```JavaScript
        function fn() {
            console.log(text); // este valor será undefined pois a variável não foi declarada ainda
            var text = 'Exemplo'; // aqui a variável é declarada
            console.log(text); // aqui conseguiremos loggar pois a variável foi declarada acima
        }
        
        fn();
    ```

    **Hoisting em funções:** [2-hoisting.js](./Hoisting/2-hoisting-funcao.js)
    ```JavaScript
    function fn() {
    
        function log(value) { //devemos por boa prática declarar a função antes de usa-la
            console.log(value);
        }
        log('Hoisting de função');
    
    }
    
    fn();
    ```

---
- #### **Imutabilidade:**
  - Itens imutáveis podem ser declarados como const (constante) cujo o conteúdo não deve ser alterado (mas pode ser copiado e modificado). Não é possível alterar um objeto imutável, você pode copiá-lo e modificar seu valor.
    - Um objeto nunca é atualizado, ele vai ser copiado e só alteramos o que queremos, usando concat, map, filter, etc.
    
**Exemplo 1:** [1-imutabilidade.js](./Imutabilidade/1-imutabilidade.js)
```JavaScript
    const user = {
        name: 'Fulano',
        lastname: 'Fulano da Silva'
    };
    
    function getUserWithFullName(user) { 
        return {
            ...user, //spread operator
            fullName: '${user.name} ${user.lastName}'
        }
    }
    
    const userWithFullName = getUserWithFullName(user);
    
    console.log(userWithFullName);
 ```

**Exemplo 2:** [2-imutabilidade.js](./Imutabilidade/2-imutabilidade.js)
```JavaScript
    const students = [{name: 'grace', grade: 7},{ name: 'Jennifer', grade: 4}, { name: 'Paul', grade: 10}];
    
    function getApprovedStudents(studentsList) {
        return studentsList.filter(student => student.grade >= 7); // filtra e joga os valores dentro de student
    }
    
    console.log('Alunos aprovados:');
    console.log(getApprovedStudents(students));
    
    console.log('\nLista de alunos');
    console.log(students);
```
- #### **Variáveis:**
  - `Let` e `const` respeitam os escopos de blocos respectivos, diferente da antiga forma, `var`
      - **Exemplo 1:** [1-variaveis.js](./Variaveis/1-variaveis.js)
      - **Exemplo 2:** [2-variaveis.js](./Variaveis/2-variaveis.js)
