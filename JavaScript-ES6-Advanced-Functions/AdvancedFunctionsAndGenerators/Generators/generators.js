//Generators são funções com pausa e
//tambem despausam e retornam valores
function* hello() {
    console.log('hello');
    yield 1;
    console.log('from');
    const value = yield 2;
    console.log(value);
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('outside!'));

//controlar loops infinitos
function* naturalnumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it1 = naturalnumbers();
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);