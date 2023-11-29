"use strict";
let lista;
lista = ['maçã', 'banana', 'morango', 'abacaxi', 'laranja'];
// Outra forma menos utilizada é a seguinte
let tipos = [true, false, true, true, true, false];
// irá receber apenas esses valores. *Apenas os 3, caso mais valores forem adicionados irá acontecer um erro
let teste = ['joao', 20, true];
teste.push(234234);
console.log(teste);
let filme = [];
filme.push("Vingadores");
filme.push(22);
const carros = [];
carros.push(["aaaa"]);
carros.push(["sadasd"]);
console.log(carros);
const times = [];
times.push(...["Palmeiras"], ...["Flamengo"]);
console.log(times);
//# sourceMappingURL=arrays.js.map