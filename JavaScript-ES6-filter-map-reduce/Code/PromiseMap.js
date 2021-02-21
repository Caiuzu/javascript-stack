 const items = [ 'a', 'b', 'c', 'd' ]

//gerar uma promise
;(async function () {
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`);
        })
    }

    const itemMapped = promiseFunction('x');
    console.log(await itemMapped);

     const itemsMapped = items.map(promiseFunction);
     console.log(itemsMapped); // console.log(await itemMapped); neste caso, não daria certo por ser um array de promisses, sendo assim teriamos que fazer com abaixo

     const itemsMappedPromises = items.map(promiseFunction);
     const itemsPromisesMapped = await Promise.all(itemsMappedPromises); // para dar await em um array de promises
     console.log(itemsPromisesMapped);

})()