
//exc 1 

let numero = 5

if (numero % 2 === 0) {
    console.log(`O número ${numero} é par`);
}
else{
    console.log(`O número ${numero} é impar`);

}

// exc 2 

let AnoDeNascimento = 2003


if (AnoDeNascimento <= 2006) {
    console.log('Você é maior de idade')
}
else {
    console.log('Você é menor de idade')
}

// exc 3 

let nota1 = 9;
let nota2 = 3;

if ((nota1 + nota2) / 2 >= 7) {
    console.log('Você foi aprovado!!');
}
else {
    console.log('Você foi reprovado!!');
}

// exc 4

let idade = 15

if (idade >= 16 ) {
    console.log('Você pode votar!!')
}
else{
    console.log('Você não pode votar!!')
}

// exc 5

let numero1 = 10
let numero2 = 8 

if ( numero1 > numero2) {
    console.log(`O ${numero1} é o maior número`) 
}
else {
    console.log(`O ${numero2} é o maior número`)
}

// exc 6

let segunda = 8;
let terça = 8;
let quarta = 8;
let quinta = 8;
let sexta = 9;

if ((segunda + terça + quarta + quinta + sexta) === 40 ) {
    console.log('Parabéns vc cumpriu as 40 horas semanais ');
}
else {
    console.log('Parabéns vc cumpriu as 40 horas semanais e fez hora extra');
}

// exc 7

let Num = 10;

if (Num >= 10 && Num <= 50) {
    console.log(`O número ${Num} está entre 10 e 50`);
}
else {
    console.log(`O número ${Num} não está entre 10 e 50`);
}

// exc 8

let letra = 'M' ; 

if ('aeiouAEIOU'.includes(letra)) {
    console.log(`A letra '${letra}' é uma vogal`);
}

else {
    console.log(`A letra '${letra}' é uma consoante`);
}

// exc 9 

let mes = 'Maio';

if ('JaneiroDezembroJulho'.includes(mes)) {
    console.log(`${mes} é um mês de férias`)
}

else {
    console.log(`${mes} NÃO é um mês de férias`)
}

// exc 10

let nota = 1;

if (nota >= 9) {
    console.log('A sua nota é A');
}
else if (nota <= 8 && nota >= 7) {
    console.log('A sua nota é B');
}
else if (nota < 7 && nota >= 5) {
    console.log('A sua nota é C');
}
else if (nota < 5 && nota >= 3) {
    console.log('A sua nota é D');
}
else{
    console.log('A sua nota é F')
}

