const test = require('tape')
const index = require('./index')

test('Aplicar desconto', (t) => {
    t.assert(index.aplicarDesconto(10,5) === 5,
    "Descontou corretamente")
    t.end()
})

test('Teste 1', (t) => {
    t.assert(index.aplicarDesconto(8,2) === 6,
    "Descontou corretamente")
    t.end()
})

test('Teste 2', (t) => {
    t.assert(index.aplicarDesconto(9,2) === 6,
    "Descontou corretamente")
    t.end()
})

test('Teste 2', (t) => {
    t.assert(index.aplicarDesconto(9,2) === 7,
    "Descontou corretamente")
    t.end()
})

test('Teste 3', (t) => {
    t.assert(index.aplicarDesconto(5,10) === 0,
    "Descontou corretamente")
    t.end()
})