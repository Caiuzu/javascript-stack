let n = parseInt(gets());

let arrayMat = Array(n);
let arrayNot = Array(n);

for (let count = 0; count < n; count++) {
    let line = gets().split(' ');
    arrayMat[count] = parseInt(line[0]);
    arrayNot[count] = parseFloat(line[1]);
}

let max = arrayNot.reduce((a, b) => Math.max(a, b));

for (let count = 0; count < n; count++) {
    if (max < 8) {
        console.log('Minimum note not reached');
        break;
    }
    if (arrayNot[count] === max) console.log(arrayMat[count]);
}