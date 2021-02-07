const user = {
    name: 'Fulano',
    lastname: 'Fulano da Silva'
};

function getUserWithFullName(user) {// os parâmetros passados para um função são dados por meio do endereço de memória, ou seja, alterar o valor que chega, alterará a variável que o forneceu
    return {
        ...user, // '...' spread operator - pra cada propriedade que eu receber de user ele vai por dentro desse ...objeto que esta no return
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName)

