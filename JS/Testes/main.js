document.getElementById('msarray').addEventListener('click', testarray);
document.getElementById('mszeraarray').addEventListener('click', zerararray);
document.getElementById('ritemarr').addEventListener('click', ritemarr);
document.getElementById('mschatbot').addEventListener('click', chatbot);

let array = [{
    name: '',
    age: 0,
    std: ''
}];

function testarray() {
    let o1 = Boolean;
    let o3 = Boolean;

    o3 = confirm("Deseja adicionar pessoas?");

    if(o3 == true) {
        while(o1 != false) {
            let name = prompt('Nome:');
            let age = prompt("Idade:");
            let std = prompt("Estudante: (Sim/Não)");
            array.push({name: name, age: parseInt(age), std: std});
            o1 = confirm("Continuar adicionando pessoas? V/F");    
        }
        let o2 = Boolean;
        o2 = confirm("Listar pessoas? V/F");

        if(o2 == true) {
            for(let i = 1; i < array.length; i++) {
                alert(`Pessoa:
                Nome: ${array[i].name}
                Idade: ${array[i].age}
                Estudante: ${array[i].std}`);
            }
        } else {
            alert("Volte sempre!");
        }
    } else {
        let o2 = Boolean;
        o2 = confirm("Listar pessoas? V/F");

        if(o2 == true) {
            for(let i = 1; i < array.length; i++) {
                alert(`Pessoa:
                Nome: ${array[i].name}
                Idade: ${array[i].age}
                Estudante: ${array[i].std}`);
            }
        } else {
            alert("Volte sempre!");
        }
    }

}

function ritemarr() {
    let i = 0;

    o1 = confirm("Deseja remover alguém da lista?");

    if(o1 == true) {
        i = prompt(`Selecione um índice para retirar da lista: de 1 a ${parseInt(array.length) - 1}`);
        parseInt(i);
        if(i >= 1) {
            array.splice(i, 1);
            alert(`Índice ${i} removido!`)
        } else{
            alert("A lista não foi alterada!");
        }
    } else {
        alert("A lista não foi alterada!");
    }
}

function zerararray() {
    let oz = confirm("Deseja resetar a Lista?");

    if(oz == true) {
        while(array.length) {
            array.pop();
        }
        alert("A lista foi limpa!")
    } else {
        alert("A lista não foi alterada!");
    }
}

function chatbot() {
    var op1 = 0;
    var op2 = 0;
    while(op1 != 9){
        op1 = prompt("1 - Paper Pack | 2 - Ruler | 9 - Exit");
            if(op1 == 1) {
                op2 = prompt("1 - Price | 2 - Help | 9 - Back");
                if(op2 == 1){
                    alert("The paper pack price is U$12");
                }
                else if(op2 == 2) {
                    alert("To be helped, send an email to: helppaper@library.com");
                }
            }
        if(op1 == 2){
            op2 = prompt("1 - Price | 2 - Help | 9 - Back");
                if(op2 == 1){
                    alert("The Ruler price is U$2");
                }
                else if(op2 == 2) {
                    alert("To be helped, send an email to: helpruler@library.com");
                }
            }
        if(op1 == 9) {
            alert("Thanks for calling us, get back soon!");
        }
    }
}
