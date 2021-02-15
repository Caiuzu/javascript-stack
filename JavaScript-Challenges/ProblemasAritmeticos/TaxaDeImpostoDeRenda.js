let salario = parseFloat(gets());

if (salario <= 2000.0)
    console.log('Isento');
else if (salario <= 3000.0)
    console.log('R$ ' + ((salario - 2000.0) * 0.08).toFixed(2));
else if (salario <= 4500.0)
    console.log('R$ ' + (1000.0 * 0.08 + (salario - 3000.0) * 0.18).toFixed(2));
else
    console.log('R$ ' + (1000.0 * 0.08 + 1500.0 * 0.18 + (salario - 4500.0) * 0.28).toFixed(2));
