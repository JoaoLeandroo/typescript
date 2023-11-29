let objeto: object

objeto = {
    name: 'joao',
    age: 24,
    job: 'Programmer'
}

let objetoTwo: Record<string, string>

objetoTwo = {
    teste1: '',
    teste2: '',
    teste3: '',
}

interface Carro {
    modelo: string
    ano: number
}

const carrosX: Carro[] = []
carrosX.push({modelo: "Ferrari", ano: 2022})
console.log(carrosX)

