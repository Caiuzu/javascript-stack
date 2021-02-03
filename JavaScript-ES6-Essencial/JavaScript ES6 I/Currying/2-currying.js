function soma(a) {
    return function (b) {
        return a + b;
    }
}

const soma2 = soma(2);
soma2(2);
soma2(3);
soma2(4);
soma2(5);
