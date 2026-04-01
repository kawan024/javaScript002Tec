class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profisao = profissao;
    }

    saudar(){
        console.log(`Òlá! Meu nome é ${this.nome}!`)
    }
    fazerAniversario(){
        this.idade += 1;
        console.log(`Feliz aniversario, agora o ${this.nome} tem ${this.idade}.`)
    }
}

let pessoa1 = new Pessoa ("Xandão", 32, "Professor");
pessoa1.saudar();
pessoa1.fazerAniversario();