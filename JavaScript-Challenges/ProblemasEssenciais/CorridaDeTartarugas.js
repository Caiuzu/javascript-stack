for (let i = 0; i < 3; i++) {

    let first = gets();
    let l = gets().split(" ");

    let velocidade = 0;
    let nivel = 0;

    velocidade = l.reduce((a, b) => (Math.max(a, b)), 0);

    if (velocidade < 10 && nivel <= 1)
        nivel = 1;
    else if (velocidade >= 20 && nivel <= 3)
        nivel = 3;
    else if (nivel < 2)
        nivel = 2;

    console.log(nivel);
}

