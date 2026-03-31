"use strict";
// 1
Object.defineProperty(exports, "__esModule", { value: true });
class VolumeCilindro {
    raio;
    altura;
    constructor(raio, altura) {
        this.raio = raio;
        this.altura = altura;
    }
    volume() {
        return Math.PI * this.raio ** 2 * this.altura;
    }
}
const cilindro = new VolumeCilindro(2, 10);
console.log(cilindro.volume());
// 2
class Estudante {
    media3;
    constructor(media3) {
        this.media3 = media3;
    }
    notaNecessaria() {
        const soma3 = this.media3 * 7;
        return (600 - soma3) / 3;
    }
}
const aluno = new Estudante(60);
console.log(aluno.notaNecessaria());
// 3
class CalculadoraDeData {
    data;
    constructor(data) {
        this.data = data;
    }
    dias() {
        const [dia, mes, ano] = this.data.split('/').map(Number);
        const dataInicial = new Date(2025, 0, 1);
        const dataFinal = new Date(ano, mes - 1, dia);
        const diferenca = dataFinal.getTime() - dataInicial.getTime();
        return Math.floor(diferenca / (1000 * 60 * 60 * 24));
    }
}
const quantosdias = new CalculadoraDeData('11/04/2025');
console.log(quantosdias.dias());
// 4
class AlunoIF {
    nome;
    matricula;
    curso;
    ira;
    constructor(nome, matricula, curso, ira) {
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
        this.ira = ira;
    }
    apresentar() {
        return `${this.nome} é aluno de ${this.curso} com matrícula ${this.matricula} e possui IRA ${this.ira}`;
    }
}
const perfil = new AlunoIF('afonso', '20231144010009', 'informática', 90);
console.log(perfil.apresentar());
//# sourceMappingURL=script.js.map