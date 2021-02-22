const N = gets();
let li = gets().split(' ');
let counter = 0;

for (let multiplos = 0; multiplos <= 3; multiplos++) {
    for (const itemLi of li) if (itemLi % (multiplos + 2) === 0) counter++;
    console.log(`${counter} Multiplo(s) de ${multiplos + 2}`);
    counter = 0;
}