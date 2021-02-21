# Aula 2 - Tipos, variáveis, operadores, condicionais e repetição em JavaScript ES6

---
## Criando e Manipulando Arrays;
- ### Criar um array:
  - _**[Array padrão](./Arrays/CriarArray.js):**_
  ```Javascript
    const array = [1, 2, 3];
    const array2 = new Array(1, 2, 3);
  ```
  - _**[Array.of:](./Arrays/ArrayOf.js)** Cria uma nova instância de array a partir do número de paramêtros informados;_
  ```Javascript
    const array = Array.of(1, 2, 3)
  ```
  - _**[Array:](./Arrays/Array.js)** Cria uma nova instância de array de acordo com os paramêtros informados;_
  ```Javascript
    const array = Array(3); // irá alocar 3 epaços vazios de memória para o array [empty x 3]
    const array2 = Array(3, 2); // irá criar um array com 2 espaços populados [3, 2]
  ```
  - _**[Array.from:](./Arrays/Array-from.js)** Cria uma nova instância de array a partir de um parâmetro array-like ou iterable object._
  ```JavaScript
    const divs = document.querySelectorAll("div"); // Gera um NodeList, não podemos utilizar pop(), shift()
    const arr = Array.from("divs"); // Neste caso teremos um Array e aí sim podemos utilizar pop(), shift()
  ```

- ### Inserir e remover elementos:
  - _**[Push:](InserirERemoverElementos/Push.js)** Adicionar um ou mais elementos **no final do array** e retorna o tamanho do novo array_
  ```Javascript
    const arr = ['banana', 'melancia', 'abacate'];
    const arrLength = arr.push('acerola');
    
    console.log(arrLength); // 4
    console.log(arr); // ['banana', 'melancia', 'abacate', 'acerola']
  ```  

  - _**[pop:](InserirERemoverElementos/pop.js)** Remove o **último** elemento de um array e retorna o elemento removido_
  ```JavaScript
    const arr = ['banana', 'melancia', 'abacate'];
    const removedItem = arr.pop();
    
    console.log(removedItem); // retorna o item removido
    // 'abacate'
    
    console.log(arr);
    // ['banana', 'melancia'];
  ```
  - _**[unshift:](InserirERemoverElementos/Unshift.js)** Adiciona um ou mais elementos no inicio de um array e retorna o tamanho do novo array_
  ```JavaScript
    const arr = ['banana', 'melancia', 'abacate'];
    const arrLenght = arr.unshift('acerola');
    
    console.log(arrLenght);
    // 4
    console.log(arr);
    // [ 'acerola', 'banana', 'melancia', 'abacate'];
  ```
  - _**[shift:](InserirERemoverElementos/Shift.js)** Remove o primeiro elemento do início de um array e retorna e retorna o elemento removido_
  ```JavaScript
    const arr = ['banana', 'melancia', 'abacate'];
    const arrLenght = arr.shift();
    
    console.log(arrLenght);
    // 'banana'
    
    console.log(arr);
    // ['melancia', 'abacate'];
  ```
  - _**[concat:](InserirERemoverElementos/Concat.js)** Concatena um ou mais arrays retornando um novo array_
  ```JavaScript
    const frutas = ['banana', 'melancia', 'abacate'];
    const salgados = ['coxinha', 'kibe', 'empada'];
    const alimentos = frutas.concat(salgados); // Não altera os arrays que foram concatenados
    
    console.log(alimentos);
    // ['banana', 'melancia', 'abacate', 'coxinha', 'kibe', 'empada']
    
    console.log(frutas);
    // ['banana', 'melancia', 'abacate']
    console.log(salgados);
    // ['coxinha', 'kibe', 'empada']
  ```
  - _**[slice:](InserirERemoverElementos/Slice.js)** Retorna um novo array "fatiado" de acordo com o início e fim_
    - **slice** não altera o array inicial
  ```JavaScript
    const array = [1, 2, 3, 4, 5];
    array.slice(0, 2);  // [1, 2] Começa do índice 1 e acaba no índice 2
    array.slice(2);     // [3, 4, 5] Pega apartir da posição 2, incluindo esta posição 
    array.slice(-1);    // [5]  Pega a primeira posição do final
    array.slice(-3);    // [3, 4, 5]  Pega três posições apartir do índice 3, da direita para esquerda
      
  ```
  - _**[splice:](InserirERemoverElementos/Splice.js)** Altera um array adicionando novos elementos enquanto remove elementos antigos_
    - **splice** altera o array inicial
    - O retorno de slice é sempre os elementos que foram removidos 
  ```JavaScript
    const array = [1, 2, 3, 4, 5];
    
    array.splice(2);        // apartir da poisção 2 vai remover os itens [3, 4, 5]
    console.log(array);     // novo valor de array [1, 2] 
  
    array.splice(0, 0, 'first');    // apartir da posição 0 remova (menos da própria posição) , quantos itens serão removidos 0, e o que será adicionado 'first' []  
    console.log(array);             // ["first", 1, 2]
  ```
  
---
## Iterar, Buscar e Transformar Elementos:

- ### Inserir e remover elementos:
  - _**[ForEach:](IterarElementos/forEach.js)** iteração de cada item dentro de um array_
  ```JavaScript
      const arr = [1, 2, 3, 4, 5];
  
      arr.forEach((value) => console.log(value));
      
      arr.forEach((value, index) => { // para saber o indice além do item
      console.log(`${index}: ${value}`);
      });
      
      arr.forEach((value, index, arr) => { // para saber o indice e o array, além do item
      console.log(index, value, arr);
      });
  ```

  - _**[Map:](IterarElementos/map.js)** Cria e retorna um **novo** array, de mesmo tamanho, aplicando uma operação a cada item do array_
  ```JavaScript
    const arr = [1, 2, 3, 4, 5];
    
    arr.map(value => value * 2);
    // [2, 4, 6, 8, 10]
  ```
  
  - _**[Flat:](IterarElementos/flat.js)** Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth)_
  ```JavaScript
    const arr = [1, 2, [3, 4]];
    
    console.log(arr.flat()); // [1, 2, 3, 4]
  ```

  - _**[FlatMap:](IterarElementos/flatmap.js)** Retorna um novo array assim como função map e executa um flat de profundidade 1_
  ```JavaScript
    const arr = [1, 2, 3, 4];
    
    arr.flatMap(value => [value * 2]);
    // [2, 4, 6, 8]
    
    arr.flatMap(value => [[value * 2]])
    // [[2], [4], [6], [8]]
  ```

  - _**[Keys:](IterarElementos/keys.js)** Retorna um array iterator que contém as chaves (posições) para cada elemento do array_
  ```JavaScript
    const arr = [1, 2, 3, 4, 5];
    const arrIterator = arr.keys();
    
    arrIterator.next();
    // {value: 0, done: false}
    
    arrIterator.next();
    // {value: 1, done: false}
    
    arrIterator.next();
    //{value: 2, done: false}
    
    arrIterator.next();
    //{value: 3, done: true}
  ```

  - _**[Values:]()** Retorna um array iterator que contém os valores das chaves (posições) para cada elemento do array_
  ```JavaScript
    const arr = [1, 2, 3, 4, 5];
    const arrIterator = arr.values();
    
    arrIterator.next();
    // {value: 1, done: false}
    
    arrIterator.next();
    // {value: 2, done: false}
    
    arrIterator.next();
    //{value: 3, done: false}
    
    arrIterator.next();
    //{value: 4, done: false}
  ```

  - _**[Values:]()** Retorna um array iterator que contém os valores das chaves (posições) para cada elemento do array_
  ```JavaScript
    const arr = [1, 2, 3, 4, 5];
    const arrIterator = arr.values();
    
    arrIterator.next();
    // {value: [0, 1], done: false}
    
    arrIterator.next();
    // {value: [1, 2], done: false}
    
    arrIterator.next();
    //{value: [2, 3], done: false}
    
    arrIterator.next();
    //{value: [3, 4], done: false}
  ```
  

- ### Buscar elementos
  - _**[Find:](BuscarElementos/find.js)** Retorna o primeiro item de um array que satisfaz a condição_
  ```JavaScript
    const arr = [1, 2, 3, 4];
    
    const firstGreaterThanTwo = arr.find(value => value > 2);
    
    console.log(firstGreaterThanTwo);
    // 3
  ```

  - _**[FindIndex:](BuscarElementos/findindex.js)** Retorna o índicie do primeiro item de um array que satisfaz a condição_
  ```JavaScript
    const arr = [1, 2, 3, 4];
    
    const firstGreaterThanTwo = arr.findIndex(value => value > 2);
    
    console.log(firstGreaterThanTwo);
    // 2
  ```

  - _**[filter:](BuscarElementos/filter.js)** Retorna um novo array com todos os elementos que satisfazem a condição_
  ```JavaScript
    const arr = [1, 2, 3, 4,];
    
    const allValuesGreaterThanTwo = arr.filter(value => value > 2);
    
    console.log(allValuesGreaterThanTwo);
    // [3, 4]
  ```

  - _**[indexOf:](BuscarElementos/indexOf.js)** Retorna o primeiro índicie em que um elemento pode ser encontrado no array_
  ```JavaScript
    const arr = [1, 2, 3, 4, 3];
    
    const firstIndexOfItem = arr.indexOf(3);
    
    console.log(firstIndexOfItem); // 1
  ```

  - _**[lastIndexOf:](BuscarElementos/lastIndexOf.js)** Retorna o último índicie em que um elemento pode ser encontrado no array_
  ```JavaScript
    const arr = [1, 3, 3, 4, 3];
    const lirstIndexOfItem = arr.lastIndexOf(3)
    
    console.log(lastIndexofItem);
    // 4
  ```

  - _**[Includes:](BuscarElementos/includes.js)** Retorna um booleano verificando se determinado elemento existe no array_
  ```JavaScript
    const arr = [1, 3, 3, 4, 3];
    
    const hasItemOne = arr.includes(1);
    // True
    
    const hasItemTwo = arr.includes(2);
    // False
  ```

  - _**[Some:](BuscarElementos/some.js)** Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição_
  ```JavaScript
    const arr = [1, 3, 3, 4, 3];
    const hasSomeEverNumber = arr.some(value => value % 2 === 0);
    // True
  ```

  - _**[Every:](BuscarElementos/every.js)** Retorna um booleano verificando se todos os itens de um array satisfazem a condição_
  ```JavaScript
    const allEvenNumbers = arr.every(value => value % 2 === 0);
    // False
  ```

  - _**[Sort:](BuscarElementos/sort.js)** Ordena os elementos do um array de acordo com a condição_
  ```JavaScript
    const arr = [1, 3, 2, 5, 4];
    
    arr.sort();
    // [1, 2, 3, 4, 5]
  ```

  - _**[reverse:](BuscarElementos/reverse.js)** Inverte os elementos de um array_
  ```JavaScript
    const arr = [1, 2, 3, 4, 5];
    
    arr.reverse();
    // [5, 4, 3, 2, 1]
  ```
- ### Transformar em outro tipo de dado

  - _**[Join:](TransformarElementos/join.js)** Junta todos os elementos de um array, separados por um delimitador e retorna uma string_
  ```JavaScript
    const arr = [1, 2, 3, 4, 5];
    
    arr.join('-');
    // "1-2-3-4-5"
  ```

  - _**[Reduce:](TransformarElementos/reduce.js)** Retorna um novo tipo de dado iterando cada posição de um array_
  ```JavaScript
    const arr = [1, 2, 3, 4, 5];
    
    arr.reduce((total, value) => total += value, 0);
    // 15
  ```