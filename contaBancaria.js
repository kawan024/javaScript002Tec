class contaBancaria {

    #saldo = 0;
    constructor(titular){
        this.titular = titular;
    }

    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
            console.log(`Deposito de ${valor} feito.`)
        }
    }

    sacar(valor){
        if (valor > 0 && valor >= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R${valor} feito`);
        }else{
            console.log("Saldo insuficente ou valor invalido")
        }
    }

    exibirSaldo(){
    return Òlá, seu saldo é ${this.#saldo}``
    }
}

const conta1 = new ContaBancaria("Atila, o huno");
conta1