function fn() {

    function log(value) { //devemos por boa prática declarar a função antes de usa-la
        console.log(value);
    }
    log('Hoisting de função');

}

fn();
