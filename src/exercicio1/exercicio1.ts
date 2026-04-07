// 1

class VolumeCilindro {
  raio: number
  altura: number

  constructor(raio: number, altura: number) {
    this.raio = raio
    this.altura = altura
  }

  volume(): number {
    return Math.PI * this.raio ** 2 * this.altura
  }
}

const cilindro = new VolumeCilindro(2, 10)
console.log(cilindro.volume())

// 2

class Estudante {
  media3: number

  constructor(media3: number) {
    this.media3 = media3
  }

  notaNecessaria(): number {
    const soma3 = this.media3 * 7
    return (600 - soma3) / 3
  }
}

const aluno = new Estudante(60)
console.log(aluno.notaNecessaria())

// 3

class CalculadoraDeData {
  data: string

  constructor(data: string) {
    this.data = data
  }

  dias(): number {
    const [dia, mes, ano] = this.data.split('/').map(Number)

    const dataInicial = new Date(2025, 0, 1)
    const dataFinal = new Date(ano, mes - 1, dia)

    const diferenca = dataFinal.getTime() - dataInicial.getTime()

    return Math.floor(diferenca / (1000 * 60 * 60 * 24))
  }
}

const quantosdias = new CalculadoraDeData('11/04/2025')
console.log(quantosdias.dias())

// 4

class AlunoIF {
  nome: string
  matricula: string
  curso: string
  ira: number

  constructor(nome: string, matricula: string, curso: string, ira: number) {
    this.nome = nome
    this.matricula = matricula
    this.curso = curso
    this.ira = ira
  }

  apresentar(): string {
    return `${this.nome} é aluno de ${this.curso} com matrícula ${this.matricula} e possui IRA ${this.ira}`
  }
}

const perfil = new AlunoIF('afonso', '20231144010009', 'informática', 90)
console.log(perfil.apresentar())