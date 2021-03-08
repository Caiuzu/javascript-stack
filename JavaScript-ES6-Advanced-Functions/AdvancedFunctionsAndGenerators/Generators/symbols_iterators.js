//symbol gera um identificador único
//pode adicionar um valor para debbuging
const uniqueID = Symbol('a');
const uniqueID2 = Symbol('a');

console.log(uniqueID === uniqueID2);

//well known symbols
//iterator
const it = [1, 2, 3][Symbol.iterator]();

while (true) {
    let {value, done} = it.next()
    if (done) {
        break;
    } else {
        console.log(value);
    }
}

const name = 'Fulano';
for (let value of name) {
    console.log(value)
}