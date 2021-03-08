//async transforma a função normal em uma promise
//await espera que outras promises sejam resolvidas
const asynctimer = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Hello from asynctimer');
    }, 1000);
});

const fn = async () => {
    const data = await asynctimer();
    return data
};

fn().then(data => {
    console.log(data.split(' '));
}).catch(err => {
    console.log(err)
})