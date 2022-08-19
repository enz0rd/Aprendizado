
var nome = "";
var idade = 0;
var estudante = Boolean;
var jogadores = [];

function addJogadores(nome, idade, estudante) {
    jogadores.push({
        nome,
        idade,
        estudante
    });
}

function consultarJog() {
    // for(let i = 0; i < jogadores.length; i++) {
    //     console.log(`jogadores,  
    //     nome: ${jogadores[i].nome}
    //     idade: ${jogadores[i].idade}
    //     estudante: ${jogadores[i].estudante}`
    // );
    // }
    jogadores.map(jogador => 
        console.log(`jogadores,  
        nome: ${jogador.nome}
        idade: ${jogador.idade}
        estudante: ${jogador.estudante}`
        )
)
    
}
