//Cria uma classe que representa uma pesspa.
//Por padrao, as propriedades de uma classe sao publicas

class Pessoa {
    private Nome: string;
    private Idade: number;
    Genero: any;

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

//1 - Declara e instancia, declaracao implicita de tipo
var p1 = new Pessoa("Fagner", 30);

//2 - Declaracao explicita de tipo, para instanciar depois
var p2: Pessoa;
p2 = new Pessoa();

//Exibe a estrutura do objeto
console.log(p1);
console.log(p2);
//Chamada de metodo
console.log(p1.apresentacao());
console.log(p2.apresentacao());