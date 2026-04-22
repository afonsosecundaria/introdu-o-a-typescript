"use strict";
class Pessoa {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
}
class Exemplar {
    constructor(isbn, titulo, autor, ano) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    getIsbn() {
        return this.isbn;
    }
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getAno() {
        return this.ano;
    }
}
class Emprestimo {
    constructor(livro, usuario) {
        this.livro = livro;
        this.usuario = usuario;
        this.dataEmprestimo = new Date();
        this.dataPrevistaDevolucao = new Date();
        this.dataPrevistaDevolucao.setDate(this.dataEmprestimo.getDate() + 15);
    }
    obterDataEmprestimo() {
        return this.dataEmprestimo;
    }
    obterDataPrevistaDevolucao() {
        return this.dataPrevistaDevolucao;
    }
    obterLivro() {
        return this.livro;
    }
    obterUsuario() {
        return this.usuario;
    }
}
const pessoa1 = new Pessoa("Afonso", "123.123.123-00");
const livro1 = new Exemplar("978-85-359-0277-5", "Memórias Póstumas de Brás Cubas", "Machado de Assis", 1881);
const emp1 = new Emprestimo(livro1, pessoa1);
console.log(emp1.obterDataPrevistaDevolucao());
console.log(emp1.obterLivro().getTitulo());
console.log(emp1.obterUsuario().getNome());
