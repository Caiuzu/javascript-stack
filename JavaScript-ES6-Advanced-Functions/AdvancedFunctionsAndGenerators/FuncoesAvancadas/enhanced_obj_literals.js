//escrever o método por meio de função
function method1() {
    console.log('Fulano');
}

// let obj = {
//     method1: method1()
// };

let obj = {
    method1
};
obj.method1();

//escrever o método diretamente no objeto
let obj1 = {
    sum: function (a, b) {
        console.log(a + b);
    }
}
obj1.sum(4, 5)

let propName = 'test';
let obj2 = {
    [propName + ' concat']: 'prop value'
};
console.log(obj2);

//omitindo a palavra function
let obj3 = {
    sum(a, b) {
        console.log(a + b);
    }
};
obj3.sum(6, 7);