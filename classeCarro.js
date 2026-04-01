class Carro{
    constructor(cor, ano, marca){
        this.Cor = cor;
        this.ano = ano;
        this.marca = marca;
    }
    Prazer(){
        console.log(`Buzina! Qual cor voçê é ${this.cor}!`)
}
    AcelerarMais(){
        this.ano += 1;
        console.log(`Voçê tem mais um ano rodando ${this.cor} tem ${this.ano}.`)
    }
}

let Carro1 = new Carro ("Prata", 2010, "fiat");
Carro1.Prazer();
Carro1.AcelerarMais();