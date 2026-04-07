"use strict";
// 1. A prefeitura da cidade de Parnamirim-RN deseja fazer uma pesquisa entre as famílias da cidade e 
// precisa da sua ajuda para fazer um programa que calcule:
// A renda familiar média da cidade;
// A média do número de filhos de cada família.
// Use repetição para ler as informações de cada família (uma por vez) e, ao término, calcule a média
// aritmética da renda e do número de filhos. Para finalizar a leitura dos dados forneça um valor negativo para a renda familiar.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class Familia {
    constructor(renda, filhos) {
        this.renda = renda;
        this.filhos = filhos;
    }
}
class Pesquisa {
    constructor() {
        this.familias = [];
    }
    adicionarFamilia(familia) {
        this.familias.push(familia);
    }
    calcularMediaRenda() {
        const total = this.familias.reduce((soma, f) => soma + f.renda, 0);
        return total / this.familias.length;
    }
    calcularMediaFilhos() {
        const total = this.familias.reduce((soma, f) => soma + f.filhos, 0);
        return total / this.familias.length;
    }
}
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const pesquisa = new Pesquisa();
while (true) {
    const renda = Number(prompt("Digite a renda familiar: "));
    if (renda < 0) {
        break; // encerra
    }
    const filhos = Number(prompt("Digite o número de filhos: "));
    const familia = new Familia(renda, filhos);
    pesquisa.adicionarFamilia(familia);
}
// Evita divisão por zero
if (pesquisa.familias.length === 0) {
    console.log("Nenhum dado foi informado.");
}
else {
    console.log("Média de renda:", pesquisa.calcularMediaRenda());
    console.log("Média de filhos:", pesquisa.calcularMediaFilhos());
}
// 2 - Implemente em Typescript o algoritmo abaixo que verifica se um número inteiro (maior que 1) é ou não primo.
// algoritmo "primo"
// início
//       //O num. é divisível por algum outro que não seja ele e 1?
// 	num: inteiro 
//       escreva("Número inteiro positivo (>1): ")
//       repita
//         leia(num)
//       enquanto num <= 1
//       primo: lógico     = true
//       divisor: número   = num - 1
//       enquanto (primo .e. divisor > 1) faça
//           se (num % divisor == 0) então
//               primo = false
//           senão
//               divisor = divisor - 1
//           fimse
//       fimenquanto
//       se (primo) então
//          escreva("O número ", num, " é primo")
//       senão
//          escreva("O número ", num, " não é primo")
//       fimse
// fim
// 3 - Faça um programa que receba um intervalo numérico inteiro e positivo (ex. 2-10; 30-800) e retorne a quantidade de números primos existentes nesse intervalo (incluindo o início e o final). Aproveite o programa desenvolvido no exercício anterior.
