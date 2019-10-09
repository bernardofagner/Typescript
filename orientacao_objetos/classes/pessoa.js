//Cria uma classe que representa uma pesspa.
//Por padrao, as propriedades de uma classe sao publicas
var Pessoa = /** @class */ (function () {
    //nao precisa ter o nome da classe
    //Nao eh permitido ter varias implementacoes de construtores
    function Pessoa(nome, idade, genero) {
        if (nome === void 0) { nome = "Fulano"; }
        if (idade === void 0) { idade = 0; }
        if (genero === void 0) { genero = "Soh amor"; }
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
    Pessoa.prototype.apresentacao = function () {
        return "Olah, meu nome eh: " + this.Nome + " tenho " + this.Idade + " anos!";
    };
    Pessoa.prototype.setNome = function (nome) {
        this.Nome = nome;
    };
    Pessoa.prototype.getNome = function () {
        return this.Nome;
    };
    return Pessoa;
}());
var Animal = /** @class */ (function () {
    //Forma de declarar propriedades direto no construtor
    //Uma propriedade readonly so pode ter um valor atribuido durante sua instanciação
    function Animal(nome, peso, corDosOlhos) {
        if (nome === void 0) { nome = "rato"; }
        if (peso === void 0) { peso = 0.0; }
        if (corDosOlhos === void 0) { corDosOlhos = "Vermelho"; }
        this.nome = nome;
        this.peso = peso;
        this.corDosOlhos = corDosOlhos;
    }
    Animal.prototype.getNome = function () {
        return this.nome;
    };
    Animal.prototype.getCorDosOlhos = function () {
        return this.corDosOlhos;
    };
    return Animal;
}());
//1 - Declara e instancia, declaracao implicita de tipo
var p1 = new Pessoa("Fagner", 30);
//2 - Declaracao explicita de tipo, para instanciar depois
var p2;
p2 = new Pessoa();
var rato = new Animal();
//Exibe a estrutura do objeto
console.log(p1);
console.log(p2);
//Chamada de metodo
console.log(p1.apresentacao());
console.log(p2.apresentacao());
console.log("Meu nome eh: " + rato.getNome() + ", a cor dos meus olhos eh " + rato.getCorDosOlhos());
