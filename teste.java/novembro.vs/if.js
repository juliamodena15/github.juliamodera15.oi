////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// EXC FACIL 


/// exc 1

let nota1 = 5
let nota2 = 3
let nota3 = 7

if ((nota1 + nota2 + nota3) / 3 >= 6) {
    console.log('Parabens você passou!')
}
else {
    console.log('Você está de recuperação!')
}

/// exc 2

const usuario = {nome: 'Julia', idade: 15}

if (usuario.idade >= 16) {
    console.log(`${usuario.nome} pode se inscrever no curso!`)
}
else {
    console.log(`${usuario.nome} infelizmente você não pode se inscrever no curso!`)
}

/// exc 3 

let Material1 = 20
let Material2 = 20
let Material3 = 5
let totalDaSoma = Material1 + Material2 + Material3 
let descontodaSoma = totalDaSoma * 0.10
let finalDconta = totalDaSoma - descontodaSoma
if (totalDaSoma >= 50) {
    console.log(`Você pagou ${totalDaSoma} reias e teve desconto que resultou em ${finalDconta}`)
}
else {
    console.log(`Sua compra deu ${totalDaSoma} reais`)
}

////Exc 4

let Presença = 44.5

if (Presença >= 75) {
   console.log(`Parabéns você tem ${Presença}% de frenquência`)
}
else {
   console.log('Você não está apto a passar de ano')
}


////Exc 5

let turno = 'V';

if (turno === 'm' || turno === 'M' ) {
   console.log('Você está no período Matinal!')
}
else if (turno === 'n' || turno === 'N') {
   console.log('Você está no período Noturno!')
}
else {
   console.log('Você está no período Vespertino!')
}

//// exc 6 

let valor1 = 4
let valor2 = 4
let valor3 = 4.5

if ((valor1 + valor2 + valor3) / 3 >= 6) {
    console.log('Parabens você passou!')
}
else if ((valor1 + valor2 + valor3) / 3 <= 5 && (valor1 + valor2 + valor3) / 3 >= 4) {
    console.log('Você está de recuperação!')
}

else {
    console.log('Você foi reprovado!')
}

//// exc 7

let monitores =10
let teclados = 10

if (monitores < 10 && teclados < 10) {
    console.log(`Você só tem ${monitores} monitores e ${teclados} teclados reponha o estoque`)
}
else if (monitores < 10 && teclados >= 10 ) {
    console.log(`Você tem ${monitores} teclados e precisa repor o estoque`)
}
else if (monitores > 10 && teclados < 10) {
    console.log(`Você tem ${teclados} monitores e precisa repor o estoque`)
}
else {
    console.log('Você não precisa repor o estoque')
}

//// exc 8



let Nota1 = 5;
let Nota2 = 5;
let Nota3 = 5;

if((Nota1 + Nota2 + Nota3) / 3 >= 8) {
    console.log('Exelente');
}
else if ((Nota1 + Nota2 + Nota3) / 3 > 6 && (Nota1 + Nota2 + Nota3) < 7.9) {
    console.log('bom');
}
else {
    console.log('Precisa Melhorar');
}

//// exc 9 

let matricula = 'sim';
let valorDoCurso = 400;
let desconto = valorDoCurso * 0.20
let ValorFinal = valorDoCurso - desconto

if (matricula === 'sim' || matricula === 'Sim') {
    console.log(`Você teve desconto no valor do seu curso, e agora o valor é de ${ValorFinal}`)
}
else{
    console.log(`O valor do seu curso é de ${valorDoCurso}`)
}


//// exc 10

let funcionalidade = 9
let design = 4
let documentacao = 6

if ((funcionalidade + design + documentacao) / 3 >= 6) {
    console.log('Parabens você passou!')
}
else if ((funcionalidade + design + documentacao) / 3 === 5 || (valor1 + valor2 + valor3) / 3 === 4) {
    console.log('Você está de recuperação!')
}

else {
    console.log('Você foi reprovado!')
}

//// exc 11





