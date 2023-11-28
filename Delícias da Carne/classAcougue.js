class Acougue {
    constructor({categoria, nome, unidade, preco}) {
        this.categoria = categoria;
        this.nome = nome;
        this.unidade = unidade;
        this.preco = preco;
    }

    addToObject(object) {
        this in object[this.categoria] ?
        new Error("The target object already contains this value") :
        object[this.categoria][this.nome.toLowerCase()] = this;   
    }
}

let obj = {
    bovinos: {},
    suinos: {},
    avinos: {},
    peixaria: {}
};

let maminha = new Acougue({categoria: "bovinos", nome: "Maminha", unidade: 500, preco: 50});
let fraldinha = new Acougue({categoria: "bovinos", nome: "Fraldinha", unidade: 500, preco: 50});

maminha.addToObject(obj);
fraldinha.addToObject(obj);


console.log(Object.keys(obj.bovinos))

for(let i = 0; i < obj.bovinos.length; i++) {
    console.log(obj.bovinos[i]);
}