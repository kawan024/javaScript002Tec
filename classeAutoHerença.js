class Automovel{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirDetalhes(){
        return `${this.marca}, ${this.modelo}, ${this.ano}`
    }
}

class Carro extends Automovel{
    constructor(marca, modelo, ano, portas){
        super(marca, modelo, ano);
        this.portas = portas;
    }
}

class Moto{
    constructor(marca, modelo, cilindradas){
        this.marca = marca;
        this.modelo = modelo;
        this.cilindradas = cilindradas;
    }

    exibirDetalhes(){
        return `${this.marca}, ${this.modelo}, ${this.cilindradas}`
    }
}

moto1 = new Moto("Honda", "CBX 250 - Twister", "2007", 249);
console.log(Moto1.exibirDetalhes());
let carro1 = new Carro("fiat", "UnoMille Economy", "2010", "5");
console.log(Carro1.exibirDetalhes());