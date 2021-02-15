
let joias = [];

while (true) {

    let entrada = gets();
    if (!entrada) break;

    let busca = joias.find(item => item === entrada);
    if (!busca) joias.push(entrada);
}

console.log(joias.length);

