//// exc 11

let Presença = 45
let nota1 = 6;
let nota2 = 2
let nota3 = 1;
let média = (nota1 + nota2 + nota3) / 3

if (Presença >= 75 && (média) >= 6) {
   console.log(`Parabéns você tem ${Presença}% de frenquência e tem a media ${media}, você esta aprovado`)
}
else if (Presença > 75 || (média) >= 4 && (média) <= 5.9) {
        console.log(`Você está de recuperação pois sua media é de ${média}`)
     }
  else if   (Presença > 75 && (média) < 4) {
        console.log(`Você está de reprovado pois sua media é de ${média}`)
  }
  else if (Presença < 75 && (média) < 4) {
    console.log(`Você está reprovado pois sua frenquencia e sua media está baixa`)
  }
  else {
    console.log(`Você está reprovado pois sua frequencia é de ${Presença}`)
  }

///// exc 12

let cartao = 'Sim'
let valido = 'Sim'

if (cartao === 'Sim' && valido === 'Sim') {
    console.log(`Acesso permitido!!`)
}
else if (cartao === 'Sim' && valido === 'Não') {
    console.log('Você não pode entrar pois seu cartão não está valido')
}
else {
    console.log('Acesso Negado')
}

////// exc 13

const recursos = 400

if (recursos > 250) {
    console.log ('Produto em estoque')
}

else {
    console.log ('Necessário fazer reserva')
}

////// exc 14 


const obrigatória = 'não'
const eletíva = 'sim'
const pergunta = 'Deseja confirmar matricula ou aguardar a chamada?'

if (obrigatória === 'sim') {
    console.log ('Matricula Confirmada')
}

else if (eletíva === 'sim') {
    console.log (pergunta)
}

else{
    console.log ('Dados Inválidos')
}

/////// exc 15 


let noTas1 = 9;
let noTas2 = 10;
let noTas3 = 7;

const mediaNoTas = (noTas1 + noTas2 + noTas3) / 3;

if (mediaNoTas >= 6) {
    console.log('Parabéns você passou!');
} 

else if (mediaNoTas >= 4 && mediaNoTas < 5.9) {
    console.log('Você ficou de recuperação!');
} 

else {
    console.log('Você reprovou!');
}

////// exc 16

let infraçoes = 14
const inframenos = 20 - infraçoes

if (infraçoes >= 20) {
    console.log(`Sua carteira foi suspensa, pois ultrapassou o limite de infrações`)
}
else {
    console.log(`Você possui ${infraçoes} infrações, cuidado pois falta ${inframenos} infrações para sua carteira ser suspensa`)
}

////// exc 17

let valorEmprestimo = 1200;  
let numParcelas = 12;        
let taxaJuros = 1.02;        
let valorFinal = valorEmprestimo * taxaJuros * taxaJuros * taxaJuros * taxaJuros * taxaJuros * taxaJuros * taxaJuros * taxaJuros * taxaJuros * taxaJuros * taxaJuros * taxaJuros;

console.log(`Valor final do emprestimo é de ${valorFinal}`)


////// exc 18 (não terminei)

let notaS1 = 9;
let notaS2 = 10;
let notaS3 = 7;
let trabalho = 'sim'
const MediaNoTas = (notaS1 + notaS2 + notaS3) / 3;
let notaFinal = MediaNoTas * ( 5 / 100) + MediaNoTas
if (trabalho === 'sim' && notaFinal >= 6) {
    console.log(`Parabéns você passou com a media ${notaFinal}`);
} 

else if (trabalho === 'Não' && trabalho >= 4 && MediaNoTas < 5.9) {
    console.log('Você ficou de recuperação');
} 
else if (trabalho === 'Não' && notaFinal) {
    console.l
}
else {
    console.log(`Você reprovou! ${notaFinal}`);
}

///// exc 19

let qualidade = prompt("alta").toLowerCase();
let preco = parseFloat(prompt(110));

if (qualidade === "alta" && preco <= 100) {
    console.log("Produto: Ótimo Custo-Benefício");
} else if (qualidade === "alta" && preco > 100) {
    console.log("Produto: Bom");
} else if (qualidade === "media" && preco <= 100) {
    console.log("Produto: Bom");
} else if (qualidade === "media" && preco > 100) {
    console.log("Produto: Regular");
} else if (qualidade === "baixa" && preco <= 100) {
    console.log("Produto: Regular");
} else {
    console.log("Produto: Ruim");
}

//ex-20

let consumo = parseFloat(prompt(55));
let valor;

if (consumo <= 50) {
    valor = consumo * 0.50;
    console.log("Valor da conta: R$ " + valor.toFixed(2));
} else if (consumo <= 150) {
    valor = consumo * 0.75;
    console.log("Valor da conta: R$ " + valor.toFixed(2));
} else if (consumo <= 300) {
    valor = consumo * 1.00;
    console.log("Valor da conta: R$ " + valor.toFixed(2));
} else {
    valor = consumo * 1.20;
    console.log("Valor da conta: R$ " + valor.toFixed(2));
}