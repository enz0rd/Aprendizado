
var nome = "";
var idade = 0;
var estudante;
var jogadores = [];

function addJogadores(nome, idade, estudante) {
    jogadores.push({
        nome: "",
        idade: 0,
        estudante: Boolean
    });
}

function consultarJog() {
    console.log(jogadores);
}