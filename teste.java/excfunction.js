// exc.1 // Crie uma função chamada saudacao que receba um nome como parâmetro e retorne uma mensagem de saudação personalizada. //


function saudacao(nome) {
    return 'Olá ' + nome + ' bem vindo(a)!'
}

const mensagem = saudacao('Bruna');

console.log(mensagem);


// exc.2 // Crie uma função chamada soma que receba dois números como parâmetros e retorne a soma deles //


function soma(a, b) {
   return  a + b
}

const resultado = soma(5, 8);
console.log(resultado)


//3. Crie uma função chamada parOuImpar que receba um número como parâmetro e retorne "Par" se o número for par e "Ímpar" se for ímpar.
function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

const numero = 7;
const resultadoParImpar = parOuImpar(numero);
console.log(`${numero} é ${resultadoParImpar}`);


//4. Crie uma função chamada multiplica que receba dois números e retorne o produto deles.

function multiplica(a, b) {
    return a * b;
}

const produto = multiplica(5, 4);
console.log(`O produto é ${produto}`);



// 5. Função para Converter Celsius em Fahrenheit

function celsiusParaFahrenheit(celsius) {
    const fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}
 
const tempCelsius = 25;
const tempFahrenheit = celsiusParaFahrenheit(tempCelsius);
console.log(`${tempCelsius}°C é igual a ${tempFahrenheit}°F`);



// 6. Função para Calcular a Média

function calculaMedia(num1, num2, num3) {
    const media = (num1 + num2 + num3) / 3;
    return media;
}

const media = calculaMedia(10, 20, 30);
console.log(`A média é ${media}`);
