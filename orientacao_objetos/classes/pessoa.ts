//Cria uma classe que representa uma pesspa.
//Por padrao, as propriedades de uma classe sao publicas

class Pessoa {
    private Nome: string;
    private Idade: number;
    Genero: any; //public por padrao

    //nao precisa ter o nome da classe
    //Nao eh permitido ter varias implementacoes de construtores
    constructor(nome: string = "Fulano", idade: number = 0, genero: any = "Soh amor") {
        this.Nome = nome;
        this.Idade = idade;
        this.Genero = genero;
    }

    //Novo construtor nao permitido
    /*constructor() {
        this.Nome = "";
        this.Idade = 0;
        this.Genero = null;
    };*/

    public apresentacao(): string {
        return "Olah, meu nome eh: " + this.Nome + " tenho " + this.Idade + " anos!";
    }

    setNome(nome: string) {
        this.Nome = nome;
    }
    getNome(): string {
        return this.Nome;
    }
}

class Animal{
    //Forma de declarar propriedades direto no construtor
    //Uma propriedade readonly so pode ter um valor atribuido durante sua instanciação
    constructor(private nome: string = "rato",
                private peso: number = 0.0,
                private readonly corDosOlhos: string = "Vermelho") {}

    getNome(): string{
        return this.nome;
    }

    getCorDosOlhos(): string{
        return this.corDosOlhos;
    }
}

//1 - Declara e instancia, declaracao implicita de tipo
var p1 = new Pessoa("Fagner", 30);

//2 - Declaracao explicita de tipo, para instanciar depois
var p2: Pessoa;
p2 = new Pessoa();
var rato: Animal = new Animal();

//Exibe a estrutura do objeto
console.log(p1);
console.log(p2);
//Chamada de metodo
console.log(p1.apresentacao());
console.log(p2.apresentacao());

console.log(`Meu nome eh: ${rato.getNome()}, a cor dos meus olhos eh ${rato.getCorDosOlhos()}`);
