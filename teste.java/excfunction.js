/////////// EXC FACIL ////////////////////////////////////////////////////////////////////////////////////////////////

//ex-1

function padronizarNome(nomeCompleto) {
    const nomeMaiusculas = nomeCompleto.toUpperCase();
    const nomeMinusculas = nomeCompleto.toLowerCase();

    console.log("Nome em maiúsculas:", nomeMaiusculas);
    console.log("Nome em minúsculas:", nomeMinusculas);
}

const nome = 'Julia';
padronizarNome(nome);

//ex-2

function verificarFrase(frase) {
    if (frase.includes('a')) {
        const posicao = frase.indexOf('a');
        console.log(`A letra "a" foi encontrada na posição: ${posicao}`);
    } else {
        console.log('A letra "a" não foi encontrada na frase.');
    }
}

verificarFrase("Este");
verificarFrase("Esta ");

//ex-3

function exibirResumo(texto, inicio, fim) {
    console.log("Resumo:", texto.slice(inicio, fim));
}
exibirResumo("O JavaScript é uma linguagem incrível.", 0, 10);

//ex-4

function unirMensagens(mensagem1, mensagem2) {
    console.log("Mensagens unidas:", mensagem1.concat(" ", mensagem2));
}
unirMensagens("Olá!", "Como você está?");

//ex-5

function substituirPalavra(frase, antiga, nova) {
    console.log("Frase alterada:", frase.replace(new RegExp(antiga, 'g'), nova));
}
substituirPalavra("O céu é azul.", "azul", "claro");

//ex-6

function formatarPalavras(frase) {
    const palavras = frase.split(" ");
    console.log("Palavras com hífen:", palavras.join("-"));
}
formatarPalavras("Camiseta bonita e confortável");


//ex-7

function gerenciarFila() {
    const fila = [];
    for (let i = 1; i <= 5; i++) {
        fila.push(i);
    }
    console.log("Fila inicial:", fila);
    fila.pop();
    console.log("Fila após atendimento:", fila);
}
gerenciarFila();


//ex-8

function gerenciarClientes() {
    const clientes = [];
    clientes.unshift("Cliente 1");
    clientes.unshift("Cliente 2");
    console.log("Clientes:", clientes);
    clientes.shift();
    console.log("Clientes após atendimento:", clientes);
}
gerenciarClientes();


//ex-9

function inverterLista(lista) {
    console.log("Lista invertida:", lista.reverse());
}
inverterLista([1, 2, 3, 4, 5]);

//ex-10

function aplicarDesconto(precos) {
    const precosComDesconto = precos.map(preco => preco * 0.9);
    console.log("Preços com desconto:", precosComDesconto);
}
aplicarDesconto([100, 200, 300]);

//ex-11

function filtrarNotas(notas) {
    const aprovados = notas.filter(nota => nota > 7);
    console.log("Notas acima de 7:", aprovados);
}
filtrarNotas([5, 8, 10, 6, 7, 9]);

//ex-12

function calcularTotal(valores) {
    const total = valores.reduce((acc, valor) => acc + valor, 0);
    console.log("Total das compras:", total);
}
calcularTotal([10, 20, 30]);

//ex-13

function ordenarLivros(titulos) {
    const titulosOrdenados = titulos.sort();
    console.log("Títulos ordenados:", titulosOrdenados);
}
ordenarLivros(["O Senhor dos Anéis", "1984", "Dom Casmurro"]);

//ex-14

function gerarNumeroAleatorio() {
    const numero = Math.floor(Math.random() * 101);
    console.log("Número aleatório:", numero);
}
gerarNumeroAleatorio();

//ex-15

function exibirDadosCliente(cliente) {
    console.log("Campos:", Object.keys(cliente));
    console.log("Dados:", Object.values(cliente));
}
exibirDadosCliente({ nome: "Maria", idade: 30, saldo: 1000 });

//ex-16

const carro = {
    marca: "Ford",
    modelo: "Fusca",
    ano: 1970,
    detalhes: function() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
};
carro.detalhes();

//ex-17

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.apresentar = function() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    };
}

const funcionario = new Pessoa("Carlos", 28);
funcionario.apresentar();

//ex-18

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    detalhes() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco}`);
    }
}

const produto = new Produto("Tênis", 199.99);
produto.detalhes();

//ex-19

const relogio = {
    hora: new Date().toLocaleTimeString(),
    exibirHora: function() {
        setTimeout(() => {
            console.log("Hora atual:", this.hora);
        }, 1000);
    }
};
relogio.exibirHora();

//ex-20

const usuario = {
    nome: "julia",
    email: "julia@example.com",
    exibirUsuario: function() {
        console.log(`Usuário: ${this.nome}, Email: ${this.email}`);
    }
};

const exibir = usuario.exibirUsuario.bind(usuario);
exibir();


