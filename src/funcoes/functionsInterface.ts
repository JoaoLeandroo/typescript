
interface CursoProps {
    id: string;
    nome: string;
    preco: number;

    exibirPreco: (preco: number) => void
}


function mostraPromocao(preco: number) {
    return preco
}

const novoCurso: CursoProps = {
    id: "1",
    nome: "Typescript",
    preco: 300,
    exibirPreco:  mostraPromocao
}

console.log(novoCurso.exibirPreco(20))
