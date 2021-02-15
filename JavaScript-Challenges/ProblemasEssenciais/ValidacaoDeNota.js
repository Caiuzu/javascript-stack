let b, c, d;
c = 0;
d = 0;

while (1) {
    if (d === 2) break;
    let a = parseFloat(gets());
    if (a >= 0 && a <= 10) {
        d++;
        c += a;
    } else
        console.log("nota invalida\n");
}

b = c / 2.00;
console.log("media = " + b.toFixed(2));

