const {soma, subtrai, mult, div} = require("./calculadora")
const { TestScheduler } = require("jest")

test('Adicionando 1 + 2 é igual a 3', () => {
    expect(soma(1, 2)).toBe(3)
})

test('Subtraindo 15-5 é igual a 10', () => {
    expect(subtrai(15, 5)).toBe(10)
})

test('Multiplicando 3*5 é igual a 15', () => {
    expect(mult(3, 5)).toBe(15)
})

test('Dividindo 10/2 é igual a 5', () => {
    expect(div(10, 2)).toBe(5)
})