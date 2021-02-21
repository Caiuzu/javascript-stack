/*

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos

Criando novos objetos

JavaScript possui um número de objetos pré-definidos. Além disso, você pode criar seus próprios objetos.
Você pode criar um objeto usando um objeto inicializador. Alternativamente, você pode primeiro criar uma função
construtora e depois instanciar um objeto usando aquela função e o operador new.

Usando inicializadores de objeto


um array com profissionais
os profissionais tem nome idade e as ferramentas que eles trabalham
as ferramentas tem nome e utilidade

 */


const Funcionario = { nome: "Caio", idade: 15, ferramenta: [{nome: "computador", funcionalidade:"programar"}, {nome: "martelo", funcionalidade:"martelar"}]};

let profissional = Funcionario;

//console.log(profissional.forEach(profissional));
//console.log ("O profissional " + profissional.nome + " tem " + profissional.idade + " anos e trabalha com " + (profissional.ferramenta[i]) ); // n consegui fazer

console.log();
console.log("Dados do profissional: " + JSON.stringify(profissional));

console.log();
console.log("Lista de ferramentas: " + JSON.stringify(profissional.ferramenta));

console.log();
console.log("nome do profissional: " + profissional.nome);
console.log("nome da ferramenta: " + profissional.ferramenta[1].nome);
console.log("funcionalidade da ferramenta: " + profissional.ferramenta[1].funcionalidade);

console.log();
console.log("nome do profissional: " + profissional.nome);
console.log("nome da ferramenta: " + profissional.ferramenta[0].nome);
console.log("funcionalidade da ferramenta: " + profissional.ferramenta[0].funcionalidade);

console.log();
console.log(`nome do profissional: ${profissional.nome}.`);
console.log(`nome da ferramenta: ${profissional.ferramenta[1].nome}.`);
console.log(`funcionalidade da ferramenta: ${profissional.ferramenta[1].funcionalidade}.`);

