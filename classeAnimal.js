class Animal{
    fazerSom(){
        console.log("Som generico de animal...");
    }
}

class cachorro extends Animal{
    fazerSom(){
        console.log("AU AU AU AU 🐕🐕🐕")
    }
}

class galinha extends Animal{
    fazerSom(){
        console.log("cocorocó cocorocó")
    }
}

const meusObjetos = [new cachorro(), new galinha()];

for (let i = 0; i < meusObjetos.legth; i++ ){
    meusObjetos[i].fazerSom();
}
