
type Car = {
    ano: number
    color: string
}

// Pode ser extendida dessas duas formas

// type Model = Car & {
//     model: string
// }

type Model = {
    model: string
} & Car

let modeloCarro: Model



