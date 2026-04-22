class Pessoa {
    nome: string
    cpf: string

    constructor(nome: string, cpf: string) {
        this.nome = nome
        this.cpf = cpf
    }

    getNome(): string {
        return this.nome
    }

    getCpf(): string {
        return this.cpf
    }
}

class Exemplar {
    isbn: string
    titulo: string
    autor: string
    ano: number

    constructor(isbn: string, titulo: string, autor: string, ano: number) {
        this.isbn = isbn
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }

    getIsbn(): string {
        return this.isbn
    }

    getTitulo(): string {
        return this.titulo
    }

    getAutor(): string {
        return this.autor
    }

    getAno(): number {
        return this.ano
    }
}

class Emprestimo {
    livro: Exemplar
    usuario: Pessoa
    dataEmprestimo: Date
    dataPrevistaDevolucao: Date

    constructor(livro: Exemplar, usuario: Pessoa) {
        this.livro = livro
        this.usuario = usuario
        this.dataEmprestimo = new Date()

        this.dataPrevistaDevolucao = new Date()
        this.dataPrevistaDevolucao.setDate(
            this.dataEmprestimo.getDate() + 15
        )
    }

    obterDataEmprestimo(): Date {
        return this.dataEmprestimo
    }

    obterDataPrevistaDevolucao(): Date {
        return this.dataPrevistaDevolucao
    }

    obterLivro(): Exemplar {
        return this.livro
    }

    obterUsuario(): Pessoa {
        return this.usuario
    }
}

const pessoa1 = new Pessoa("Afonso", "123.123.123-00")

const livro1 = new Exemplar(
    "978-85-359-0277-5",
    "Memórias Póstumas de Brás Cubas",
    "Machado de Assis",
    1881
)

const emp1 = new Emprestimo(livro1, pessoa1)

console.log(emp1.obterDataPrevistaDevolucao())
console.log(emp1.obterLivro().getTitulo())
console.log(emp1.obterUsuario().getNome())