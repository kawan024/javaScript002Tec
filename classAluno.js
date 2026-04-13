class Aluno {
  constructor(nome, matricula, notas) {
    this.nome = nome;
    this.matricula = matricula;
    this.notas = notas;
  }

  calculaMedia() {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i];
    }
    return soma / this.notas.length;
  }

  obterStatus() {
    const media = this.calculaMedia();

    if (media >= 7) {
      return "aprovado";
    } else if (media >= 5) {
      return "recuperação";
    } else {
      return "reprovado";
    }
  }
}

let aluno1 = new Aluno(`ana`, 5050, [8, 0, 7, 3, 9, 0]);
console.log(aluno1.calculaMedia());
console.log(aluno1.obterStatus());