class Animal{
    protected CodigoGenetico: string;
    protected Nome: string;

    constructor(nome: string = "", codigoGenetico: string = "Nao-Definido!"){
        this.Nome = nome;
        this.CodigoGenetico = codigoGenetico;
    }

    setCodigoGenetico(codigoGenetico: string){
        this.CodigoGenetico = codigoGenetico;
    }

    getCodigoGenetico(): string{
        return this.CodigoGenetico;
    }

    apresentacao(): string{
        return "Olah sou um SER VIVO.";
    }
}

class Cachorro extends Animal{

    private Caracteristicas: string;

    constructor(nome: string = "", codigoGenetico: string = "DNA de Cachorro", caracteristicas: string = ""){
        super(nome, codigoGenetico);
        this.Caracteristicas = caracteristicas;
    }

    apresentacao(): string{
        return "Olah sou um CACHORRO.";
    }

    setCodigoGenetico(codigoGenetico: string){
        this.CodigoGenetico = codigoGenetico;
    }
    getCodigoGenetico(){
        return this.CodigoGenetico;
    }
    getCaracteristicas(): string{
        return this.Caracteristicas;
    }

    apresentacaoTipoBase(){
        return super.apresentacao();
    }
}


var serVivo : Animal;
var dalmata : Cachorro;

serVivo = new Animal("Baby");

dalmata =  new Cachorro("Dalmy", null, "Pintas pretas pelo corpo afora");//Como pular o segundo parametro opcional sem perder a atribuicao padrao?

console.log(serVivo.apresentacao());
console.log(dalmata.apresentacao());

console.log(serVivo.getCodigoGenetico());
console.log(dalmata.getCodigoGenetico());
dalmata.setCodigoGenetico("DNA de Cachorro!");
console.log(dalmata.getCodigoGenetico());
console.log(dalmata.apresentacaoTipoBase());
console.log(dalmata.getCaracteristicas());
