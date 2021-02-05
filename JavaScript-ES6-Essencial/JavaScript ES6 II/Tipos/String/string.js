// Retorna o tamanho de uma String
//const textSize = 'texto';
const textSize = 'texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

// Busca por um valor e substitui por outro
const replaceText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituicao de valor:', replaceText);

// Retorna a "Fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string:', lastChar);

//pega tudo até a penultima letra resultado -> Text
const allWithputLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a ultima', allWithputLastChar);

const secondtoEnd = 'Texto'.slice(1);
console.log('\nValor da string da primeira letra menos a ultima:', secondtoEnd);

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas letras primeiras letras são:', twoCharsBeforeFirstPos);
