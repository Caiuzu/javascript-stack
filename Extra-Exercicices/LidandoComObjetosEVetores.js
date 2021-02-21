let empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: '260'
    }
}

console.log(`O nome do usuário é ${empresa.nome}`);

const programador = {
    nome: 'Carlos',
    idade: '32',
    tecnologias: [
        {nome: 'C++', especialidade: 'Desktop'},
        {nome: 'Python', especialidade: 'Data Science'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
}

function listarTecnologias(listaDeTecnologias) { // cria a function
    let lista = ''; // inicializa a variável com vazio ''
    listaDeTecnologias.forEach(tecnologia => { // pegamos o parâmetro que recebemos através de listaDeTecnologias (no caso -> programador.tecnologias) e iteramos os itens um a um
        lista += `, ${tecnologia.nome} com especialidade em ${tecnologia.especialidade}`; // concatenamos a frase
    });
    return lista; // retornamos lista para quem chamar a function exemplo: ${listarTecnologias(programador.tecnologias)}
}

// Listar todas tecnologias do array
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa as tecnologias${listarTecnologias(programador.tecnologias)}.`);


// listar uma tecnologia de um index específico 'programador.tecnologias[0]'
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);

