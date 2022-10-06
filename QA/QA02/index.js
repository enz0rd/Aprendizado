function jurosimples(dinheiroMes, taxa, tempo) {
    let jurosimples = 0
    jurosimples = dinheiroMes * taxa * tempo
    return dinheiroMes + jurosimples
}

function jurocomposto(dinheiroMes, taxa, tempo) {
    let jurocomposto = 0
    let resultado = 0
    jurocomposto = dinheiroMes * (Math.pow((1 + taxa), tempo))
    resultado = jurocomposto.toFixed(2)
    return parseFloat(resultado)
}

function calculoIR(salarioBruto) {
    let resultado = 0
    if(salarioBruto <= 900) {
        resultado = 'Isento'
        return resultado
    } else if(salarioBruto > 900 && salarioBruto <= 1500) {
        resultado = parseFloat(salarioBruto * 0.075).toFixed(2)
        return parseFloat(resultado)
    } else if(salarioBruto > 1500 && salarioBruto <= 2400) {
        resultado = parseFloat(salarioBruto * 0.09).toFixed(2)
        return parseFloat(resultado)
    } else if(salarioBruto > 2400 && salarioBruto <= 3500) {
        resultado = parseFloat(salarioBruto * 0.11).toFixed(2)
        return parseFloat(resultado)
    } else {
        resultado = parseFloat(salarioBruto * 0.14).toFixed(2)
        return parseFloat(resultado)
    }
}

class Expoente {
    constructor(num1,num2) {
        this.num1 = num1
        this.num2 = num2
    }
}

class calculoexpoente extends Expoente {
    expoente() {
        let result = (this.num1 ** this.num2)
        console.log(result)
        return parseInt(result)
    }
}


let calculo = new calculoexpoente(num1,num2)

module.exports = {jurosimples, jurocomposto, calculoIR, calculo}