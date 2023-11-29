let lista:string[]
lista = ['maçã', 'banana', 'morango', 'abacaxi', 'laranja']

// Outra forma menos utilizada é a seguinte
let tipos: Array<boolean> = [true, false, true, true, true, false]

// irá receber apenas esses valores. *Apenas os 3, caso mais valores forem adicionados irá acontecer um erro
let teste: [string, number, boolean] = ['joao', 20, true]

teste.push(234234)

console.log(teste)

let filme: Array<string | number> = []

filme.push("Vingadores")
filme.push(22)

const carros: string[][] = []
carros.push(["aaaa"])
carros.push(["sadasd"])
console.log(carros)


const times: string[] = []

times.push(...["Palmeiras"], ...["Flamengo"])
console.log(times)