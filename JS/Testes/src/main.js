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

let htrab = 0
let salb = 0
let valir = 0
let valinss = 0
let valsind = 0
let salliq = 0
let totdesc = 0
let totfgts = 0
let tsab = false
let qtdhrn = 0
let qtdhrs = 0
let salhor = 0

salcalc = () => {
  alert('Bem vindo ao cálculo de salário!')
  salb = prompt('Digite o valor do seu salário bruto: Ex: 1423.54')

  parseFloat(salb)

  valinss = salb * 0.08
  valsind = salb * 0.05
  valir = descir()
  totfgts = acrescfgts();

  if(valir == "Isento") {
    totdesc = valinss + valsind
  } else {
    totdesc = valir + valinss + valsind
  }
  salliq = salb - totdesc
  salliq.toFixed(2)
  valhor()
}

acrescfgts = () => {
  totfgts = salb * 0.11
  parseFloat(totfgts).toFixed(2)
  salliq = (salliq + totfgts).toFixed(2)
  return totfgts.toFixed(2)
}

descir = () => {
  if(salb <= 900) {
    return "Isento"
  } else if (salb > 900 && salb <= 1500) {
    return "R$" + (salb * 0.05).toFixed(2)
  } else if (salb > 1500 && salb <= 2500) {
    return "R$" + (salb * 0.1).toFixed(2)
  } else if (salb > 2500) {
    return "R$" + (salb * 0.2).toFixed(2)
  }
  
}

valhor = () => {
  htrab = prompt('Quantas horas você trabalha por dia? Ex: 5')
  parseInt(htrab)
  tsab = prompt('Trabalha aos sábados? V/F')
  if (tsab == 'V') {
    qtdhrs = htrab * 6 * 21
    salhor = parseFloat(salliq).toFixed(2) / parseInt(qtdhrn)
  } else {
    qtdhrn = htrab * 5 * 21
    salhor = parseFloat(salliq).toFixed(2) / parseInt(qtdhrn)
  }
  totsal()
}

totsal = () => {
  alert(`
    O valor do seu salário líquido é: R$${salliq.toFixed(2)}
    
    Os descontos são:
      Imposto de Renda: ${descir()}
      INSS: R$${valinss.toFixed(2)}
      Sindicato: R$${valsind.toFixed(2)}
      Desconto total: R$${totdesc.toFixed(2)}
    O acréscimo de FGTS é: R$${acrescfgts()}
    `)
  tothor()
}

tothor = () => {
  if (valhor.tsab == 'V') {
    alert(`
        Você ganha R$${salhor} por hora e trabalha aos sábados.
`)
  } else {
    alert(`
        Você ganha R$${salhor} por hora e não trabalha aos sábados.
        `)
  }
}

document.getElementById('salcalc').addEventListener('click', salcalc)
