
// type Funcionario = {
//     name: string
//     age: number
//     id: number
// }

// interface Engenheiro extends Funcionario {
//     experience: string
// }

// interface Medico extends Funcionario {
//      curso: string
// }

interface Armazenamento<T> {
    id: number
    product: string
    value: number
    teste: T
}

interface Iphone {
    rastreamento: string
}

let celular: Armazenamento<Iphone>

// usando o teste, eu consigo acessar as propriedades do Iphone sem usar o extends
// celular.teste.rastreamento