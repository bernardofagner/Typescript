//Uma classe que implementa uma interface deve declarar todas as propriedades presentes na interface e implemetar todos os metodos definidos na interface
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.setCodigoChassi = function (codigoChassi) {
        this.CodigoChassi = codigoChassi;
    };
    Carro.prototype.getCodigoChassi = function () {
        return this.CodigoChassi;
    };
    Carro.prototype.getInformacaoLegal = function () {
        //throw new Error("Method not implemented.");
        return "ESTE VEICULO FOI PROJETADO PARA CIRCULAR NA TERRA";
    };
    return Carro;
}());
var fazNada;
(function () { return fazNada = "uma lambda que nao faz nada"; });
console.log(fazNada);
