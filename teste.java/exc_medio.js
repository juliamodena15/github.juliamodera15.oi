// exc.1

let a = 18;
let b = 20;
let c = 25;

if (a > b && a > c) {
    console.log(`${a} é o maior número`);
}
else if (b > a && b > c) {
    console.log(`${b} é o maior número`);
}
else {
    console.log(`${c} é o maior número`);
}

// exc.2

let texto = "String"

if ("String" === texto) {
    console.log("A palavra começa com letra maiuscula")
} 
else if ("string" === texto) {
    console.log("Apalavra começa com letra minuscula")
}

// exc.3 

let temperatura = 32

if (temperatura < 15 ){
   console.log('Frio ')
}
else if (temperatura > 15 && temperatura < 30) {
    console.log('Moderado')
}
else{
    console.log('Quente')
}

// exc.4 

let ano = 2020
let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

console.log(bissexto);

// exc.5

let numero = 40

if ( numero % 5 === 0) {
   console.log(`O número ${numero} é divisível por 5`)
}

else{
    console.log(`O número ${numero} Não é divisível por 5`)
}

// exc.6

let semaforo = 'vermelho'

if (semaforo === 'verde') {
    console.log('Pode seguir seu caminho')
}
else if (semaforo === 'amarelo') {
    console.log('Você tem que parar')
}
else {
    console.log('Você tem que esperar o semáforo ficar verde para poder seguir seu caminho')
}

// exc.7


// exc.8