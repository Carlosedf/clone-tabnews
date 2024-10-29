const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 50 + 100 deveria retornar 150", () => {
  const resultado = calculadora.somar(50, 100);
  expect(resultado).toBe(150);
});

test("somar 'batata' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("batata", 100);
  expect(resultado).toBe("Erro");
});
