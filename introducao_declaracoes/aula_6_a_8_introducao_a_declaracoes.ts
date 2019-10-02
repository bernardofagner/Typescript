// Arrow Functio
var fn1 = () => "arrow function 1";

//function
var fn2 = function() {
  return "arrow function 2";
};

/*Declaracao de tipos explicita - usa a paavra reservada Var*/
var idade: number = 5;
var frase: string = "Fagner";
var valido: boolean = true;
var meuVetorDeNumeros: number[] = [1, 2, 3, 4];
var meuVetorString: string[] = [
  "Fagner", "Oliveira", "Bernardo"
]
var meuVetorBoleano: boolean[] = [
  true, false, true, false
]
var indefinido: undefined;

console.log(idade);
console.log(frase);
console.log(valido);
console.log(meuVetorBoleano);
console.log(meuVetorDeNumeros);
meuVetorDeNumeros.push(69);
console.log(meuVetorDeNumeros);
console.log(meuVetorString);
meuVetorString.push("Typescript");
console.log(meuVetorString);

//Tuplas
var minhaTupla: [number, string];
minhaTupla = [1, "Fagner"];
minhaTupla = [2, "Oliveira"]; //Sobrescreve o valor anterior

console.log(minhaTupla);

/*tipos dentro de classes chamam-se "Propriedades"  - usa o modificador de acesso public ou private*/
class Pessoa {
  private Nome: string

  setNome(nome: string = null){
    this.Nome = nome;
  }
  getNome(): string{
    return this.Nome;
  }
}



var pessoa = new Pessoa();
pessoa.setNome("Fagner");
console.log("Meu nome eh: " + pessoa.getNome());