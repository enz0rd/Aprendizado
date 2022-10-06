// Index Page
document.getElementById('msarray').addEventListener('click', testarray)
document.getElementById('mszeraarray').addEventListener('click', zerararray)
document.getElementById('ritemarr').addEventListener('click', ritemarr)

let array = [
  {
    name: '',
    age: 0,
    std: '',
  },
]

function testarray() {
  let o1 = Boolean
  let o3 = Boolean

  o3 = confirm('Deseja adicionar pessoas?')

  if (o3 == true) {
    while (o1 != false) {
      let name = prompt('Nome:')
      let age = prompt('Idade:')
      let std = prompt('Estudante: (Sim/Não)')
      array.push({ name: name, age: parseInt(age), std: std })
      o1 = confirm('Continuar adicionando pessoas? V/F')
    }
    let o2 = Boolean
    o2 = confirm('Listar pessoas? V/F')

    if (o2 == true) {
      for (let i = 1; i < array.length; i++) {
        alert(`Pessoa:
                Nome: ${array[i].name}
                Idade: ${array[i].age}
                Estudante: ${array[i].std}`)
      }
    } else {
      alert('Volte sempre!')
    }
  } else {
    let o2 = Boolean
    o2 = confirm('Listar pessoas? V/F')

    if (o2 == true) {
      for (let i = 1; i < array.length; i++) {
        alert(`Pessoa:
                Nome: ${array[i].name}
                Idade: ${array[i].age}
                Estudante: ${array[i].std}`)
      }
    } else {
      alert('Volte sempre!')
    }
  }
}

function ritemarr() {
  let i = 0

  o1 = confirm('Deseja remover alguém da lista?')

  if (o1 == true) {
    i = prompt(
      `Selecione um índice para retirar da lista: de 1 a ${
        parseInt(array.length) - 1
      }`,
    )
    parseInt(i)
    if (i >= 1) {
      array.splice(i, 1)
      alert(`Índice ${i} removido!`)
    } else {
      alert('A lista não foi alterada!')
    }
  } else {
    alert('A lista não foi alterada!')
  }
}

function zerararray() {
  let oz = confirm('Deseja resetar a Lista?')

  if (oz == true) {
    array.pop()
    alert('A lista foi limpa!')
  } else {
    alert('A lista não foi alterada!')
  }
}

//Cálculo de Salário

let htrab = 0
let salb = 0
let valir = 0
let valsind = 0
let valinss = 0
let salliq = 0
let totdesc = 0
let totfgts = 0
let tsab = false
let qtdhrn = 0
let qtdhrs = 0
let salhor = 0

salcalc1 = () => {
  alert('Bem vindo ao Cálculo de Salário!')
  salb = parseFloat(prompt('Digite o valor do seu salário bruto: Ex: 1423.54'))
  valinss = salb * 0.08
  valsind = salb * 0.08
  valir = salb * 0.11
  calculoTotalDesc1()
}

calculoTotalDesc1 = () => {
  if(valir == "Isento") {
    totdesc = valinss + valsind
  } else {
    totdesc = valir + valinss + valsind
  }
  salliq = salb - totdesc
  valhor1()
}

valhor1 = () => {
  htrab = parseInt(prompt('Quantas horas você trabalha por dia? Ex: 5'))
  tsab = prompt('Trabalha aos sábados? V/F')
  if (tsab === 'V') {
    qtdhrs = htrab * 6 * 21
    salhor = salliq / qtdhrs
  } else {
    qtdhrn = htrab * 5 * 21
    salhor = salliq / qtdhrn
  }
  totsal1()
}

totsal1 = () => {
  alert(`
    O valor do seu salário bruto é: R$${salb.toFixed(2)}
    
    Os descontos são:
      Imposto de Renda: ${valir.toFixed(2)}
      INSS: R$${valinss.toFixed(2)}
      Sindicato: R$${valsind.toFixed(2)}
      Desconto total: R$${totdesc.toFixed(2)}
    O valor do seu salário líquido é: R$${salliq.toFixed(2)}
    `)
}

//Fim Cálculo de Salário
//Folha de Pagamento

salcalc2 = () => {
  alert('Bem vindo à Folha de Pagamento!')
  salb = parseFloat(prompt('Digite o valor do seu salário bruto: Ex: 1423.54'))
  valinss = salb * 0.1
  descir2()
}

descir2 = () => {
  if(salb <= 900) {
    valir = "Isento"
  } else if (salb > 900 && salb <= 1500) {
    valir = (salb * 0.05)
  } else if (salb > 1500 && salb <= 2500) {
    valir = (salb * 0.1)
  } else if (salb > 2500) {
    valir = (salb * 0.2)
  }
  totfgts = salb * 0.11
  calculoTotalDesc2()
}

calculoTotalDesc2 = () => {
  if(valir === "Isento") {
    totdesc = valinss
  } else {
    totdesc = valir + valinss
  }
  salliq = salb - totdesc
  valhor2()
}

valhor2 = () => {
  htrab = parseInt(prompt('Quantas horas você trabalha por dia? Ex: 5'))
  tsab = prompt('Trabalha aos sábados? V/F')
  if (tsab === 'V') {
    qtdhrs = htrab * 6 * 21
    salhor = salliq / qtdhrs
  } else {
    qtdhrn = htrab * 5 * 21
    salhor = salliq / qtdhrn
  }
  convertValIr2()
}

convertValIr2 = () => {
  if (valir === "Isento") {
    valir 
  } else {
    valir = "R$" + valir
  }
  totsal2()
}

totsal2 = () => {
  alert(`
    O valor do seu salário líquido é: R$${salliq.toFixed(2)}
    
    Os descontos são:
      Imposto de Renda: ${valir}
      INSS: R$${valinss.toFixed(2)}
      Desconto total: R$${totdesc.toFixed(2)}
    O acréscimo de FGTS é: R$${totfgts.toFixed(2)}
    `)
  tothor2()
}

tothor2 = () => {
  if (tsab === 'V') {
    alert(`
        Você ganha R$${salhor.toFixed(2)} por hora e trabalha aos sábados.
`)
  } else if (tsab !== "V") {
    alert(`
        Você ganha R$${salhor.toFixed(2)} por hora e não trabalha aos sábados.
        `)
  }
}

//Fim Folha de Pagamento
//Posto de Gasolina

let escolhaComb = ""
let qtdLitros = 0
const precoAlcool = 1.9
let precoAlcoolDesc = 0
const precoGasolina = 2.5
let precoGasolinaDesc = 0
let valortotal = 0

posto = () => {
  escolhaComb = prompt(`Escolha o seu combustível:
  A - Álcool
  G - Gasolina`)

  if(escolhaComb === "A") {
    calcAlcool()
  } else if(escolhaComb === "G") {
    calcGasolina()
  } else {
    alert("Erro, tente novamente")
    posto()
  }
}

calcAlcool = () => {
  qtdLitros = parseFloat(prompt("Quantos litros de álcool? Ex: 5.0"))
  if(qtdLitros <= 20) {
    precoAlcoolDesc = precoAlcool - (precoAlcool * 0.03)
    valortotal = qtdLitros * precoAlcoolDesc
    alert(`Valor a pagar: R$${valortotal.toFixed(2)}`)
  } else {
    precoAlcoolDesc = precoAlcool - (precoAlcool * 0.05)
    valortotal = qtdLitros * precoAlcoolDesc
    alert(`Valor a pagar: R$${valortotal.toFixed(2)}`)  
  }
}

calcGasolina = () => {
  qtdLitros = parseFloat(prompt("Quantos litros de gasolina? Ex: 5.0"))
  if(qtdLitros <= 20) {
    precoGasolinaDesc = precoGasolina - (precoGasolina * 0.04)
    valortotal = qtdLitros * precoGasolinaDesc
    alert(`Valor a pagar: R$${valortotal.toFixed(2)}`)
  } else {
    precoGasolinaDesc = precoGasolina - (precoGasolina * 0.06)
    valortotal = qtdLitros * precoGasolinaDesc
    alert(`Valor a pagar: R$${valortotal.toFixed(2)}`)  
  }
}

//Fim Posto de Gasolina
//Reajuste de Salário

let turnoestudo = ""
let salariob = 0
let salarioreaj = 0
let valaumento = 0
let percentuais = [0.2,0.15,0.1,0.05]
let percentualusado = 0

turno = () => {
  turnoestudo = prompt(`Qual o seu turno de estudo?
  M - Matutino
  V - Vespertino
  N - Noturno`)
  if(turnoestudo === "M"){
    alert("Bom dia!")
  } else if (turnoestudo === "V") {
    alert("Boa tarde!")
  } else if (turnoestudo === "N") {
    alert("Boa noite!")
  } else {
    alert("Valor Inválido")
    turno()
  }
  salario()
}

salario = () => {
  salariob = parseFloat(prompt("Qual o seu salário? Ex: 1234.56"))
  reajuste()
}

reajuste = () => {
  if(salariob <= 280) {
    valaumento = salariob * percentuais[0]
    percentualusado = percentuais[0]
    salarioreaj = salariob + valaumento
  } else if (salariob > 280 && salariob <= 700) {
    valaumento = salariob * percentuais[1]
    percentualusado = percentuais[1]
    salarioreaj = salariob + valaumento
  } else if (salariob > 700 && salariob <= 1500) {
    valaumento = salariob * percentuais[2]
    percentualusado = percentuais[2]
    salarioreaj = salariob + valaumento
  } else if (salariob > 1500) {
    valaumento = salariob * percentuais[3]
    percentualusado = percentuais[3]
    salarioreaj = salariob + valaumento
  }
  resultado()
}

resultado = () => {
  alert(`O resultado do Reajuste é:
    Salário anterior: R$${salariob}
    Percentual de aumento: ${percentualusado}%
    Valor do Aumento: R$${valaumento}
    Novo Salário: R$${salarioreaj}`)
}

//Fim Reajuste de Salário

document.getElementById('postogasolina').addEventListener('click', posto)
document.getElementById('reajustesal').addEventListener('click', turno)
document.getElementById('salcalc1').addEventListener('click', salcalc1)
document.getElementById('salcalc2').addEventListener('click', salcalc2)
