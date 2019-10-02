//Declaracao explicita (expoe o tipo)
var nome = "Fagner";
var idade = 10;
//Declaracao implicita (nao expoe o tipo, mas o infere)
var sobrenome = "Oliveira";
var tempoDeVida = 30;
//Situacoes de erro (descomente para ver)
//nome = 1;
//tempoDeVida = "dezoito anos"
//Tipagem de função implicita, baseada no tipo do return
function retornoImplicito() {
    return "Mensagem  de retorno IMPLICITO";
}
function retornoExplicito() {
    return "Mensagem de retorno EXPLICITO";
}
console.log(retornoImplicito());
console.log(retornoExplicito());
