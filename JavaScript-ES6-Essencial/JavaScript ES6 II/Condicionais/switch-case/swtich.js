const fruit = 'mamão'

switch (fruit) {
    case 'banana':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00 / kg'); // Posso colocar mais de um case com o mesmo "procedimento", neste caso console.log()
        break;
    default:
        console.log('Produto ão existe no estoque.');
        break;
}
