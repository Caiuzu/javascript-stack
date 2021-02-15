let line = gets().split(' ');

let a = parseInt(line[0]);
let b = parseInt(line[1]);
let q = parseInt(a / b);

let r = a - b * q;

if (r < 0) {
    r += parseInt(Math.abs(b));
    q = parseInt((a - r) / b);
}

console.log(q + " " + r);
