function pegarComanda() {
    console.log('Olá, Boa noite!');
    console.log('Pegue aqui a sua comanda!');
    console.log('Bom apetite!!');
    console.log('---------------------------');
}

pegarComanda();


function calcularQuadrado(numeroDaVez) {
    console.log(`O numero da vez é o ${numeroDaVez}`);
    console.log(
        `O número da vez (${numeroDaVez}) ao quadrado vale ${numeroDaVez ** 2}`
    )
}

calcularQuadrado(2);





function resolverBhaskara(a, b, c) {
    const delta = b ** 2 - 4 * a * c;
    const x1 = (-b + calcularRaizQuadrada(delta)) / (2 * a);
    const x2 = (-b - calcularRaizQuadrada(delta)) / (2 * a);

    console.log(
        `Os dois valores de X dos pontos das parábula no eixo X são ${x1} e ${x2}`
    );
}

function calcularRaizQuadrada(base) {
    return base**(1/2);
    
}
resolverBhaskara(2, 3, -2)



