const test = require('tape')
const index = require('./index.js')

test('Teste 1 - Juro Simples', (t) => {
    t.assert(index.jurosimples(200, 0.05, 5) === 250, "Cálculo certo")
    t.end()
})
test('Teste 2 - Juro Simples', (t) => {
    t.assert(index.jurosimples(500, 0.1, 10) === 550, "Cálculo Errado")
    t.end()
})
test('Teste 3 - Juro Simples', (t) => {
    t.assert(index.jurosimples(500, 0.1, 10) === 1000, "Cálculo certo")
    t.end()
})


test('Teste 4 - Juro Composto', (t) => {
    t.assert(index.jurocomposto(200, 0.05, 5) === 255.26, "Cálculo certo")
    t.end()
})
test('Teste 5 - Juro Composto', (t) => {
    t.assert(index.jurocomposto(50, 0.15, 10) === 291, "Cálculo Errado")
    t.end()
})
test('Teste 6 - Juro Composto', (t) => {
    t.assert(index.jurocomposto(20, 0.1, 7) === 38.97, "Cálculo certo")
    t.end()
})


test('Teste 7 - Cálculo IR', (t) => {
    t.assert(index.calculoIR(837) === 'Isento', "Resultado Correto")
    t.end()
})
test('Teste 8 - Cálculo IR', (t) => {
    t.assert(index.calculoIR(4000) === 294.58, "Resultado Correto")
    t.end()
})
test('Teste 9 - Cálculo IR', (t) => {
    t.assert(index.calculoIR(2678) === 294.58, "Resultado Correto")
    t.end()
})
