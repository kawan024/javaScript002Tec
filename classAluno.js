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

  exibirRelatorio() {
    console.log(`=================================`);
    console.log(`Relatório do aluno: ${this.nome}`);
    console.log(`Matrícula: ${this.matricula}`);
    console.log(`Média final: ${this.calculaMedia()}`);
    console.log(`Status: ${this.obterStatus()}`);
    console.log(`=================================`);
  }
}

let turma = [
  new Aluno(`Luiz`, `CGM5050`, [5.2, 9.5, 75]),
  new Aluno(`Kawan`, `CGM6050`, [7.2, 7.5, 62]),
  new Aluno(`Ana`, `CGM7050`, [4.2, 6.7, 82]),
  new Aluno(`Cauan`, `CGM3050`, [3.2, 9.7, 92]),
  new Aluno(`Fernando`, `CGM4050`, [6.5, 8.5, 72]),
]


console.log(turma[1]);

for (let i = 0; i <turma.length; i++ ){
  turma[i].exibirRelatorio();
}

//let aluno1 = new Aluno("ana", 5050, [8, 0, 7, 3, 9, 0]);
//console.log(aluno1.calculaMedia());
//console.log(aluno1.obterStatus());

//aluno1.matricula = 5000000
//aluno1.exibirRelatorio()