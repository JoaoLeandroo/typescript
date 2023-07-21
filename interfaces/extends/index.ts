interface Pessoa {
    nome: string
    idade: number
}

interface Aluno extends Pessoa {
    curso: string
    ira: number
}

let aluno: Aluno


interface Animal {
    nome: string
    cor: string
}

interface Corre {
    corre: boolean
}

interface Passaro extends Animal, Corre{
    asas: number
    voa: boolean
}

let tipoAnimal: Passaro

// tipoAnimal.asas
// tipoAnimal.corre