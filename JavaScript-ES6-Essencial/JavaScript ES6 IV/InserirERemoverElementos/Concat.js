const frutas = ['banana', 'melancia', 'abacate'];
const salgados = ['coxinha', 'kibe', 'empada'];
const alimentos = frutas.concat(salgados); // Não altera os arrays que foram concatenados

console.log(alimentos);
// ['banana', 'melancia', 'abacate', 'coxinha', 'kibe', 'empada']

console.log(frutas);
// ['banana', 'melancia', 'abacate']
console.log(salgados);
// ['coxinha', 'kibe', 'empada']