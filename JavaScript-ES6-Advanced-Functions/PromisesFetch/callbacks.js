// callback
// maneira tradicional de callback
function doSomething(callback) {
    setTimeout(function () {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        // did other thing
        callback('Second data');
    }, 1000);
}

// execução de maneira sequencial das funções com callback (callback hell)
function doAll() {
    try {
        doSomething(function (data) {
            const processedData = data.split('');
            try {
                doOtherThing(function (data) {
                    let processedData2 = data.split('');
                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (err) {
                        // handle error
                    }
                });
            } catch (err) {
                // handle error
            }
        });
    } catch (err) {
        // handle error
    }
}

// chamando as funções
doAll();