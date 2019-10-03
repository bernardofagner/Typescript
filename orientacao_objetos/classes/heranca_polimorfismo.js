var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nome, codigoGenetico) {
        if (nome === void 0) { nome = ""; }
        if (codigoGenetico === void 0) { codigoGenetico = "Nao-Definido!"; }
        this.Nome = nome;
        this.CodigoGenetico = codigoGenetico;
    }
    Animal.prototype.setCodigoGenetico = function (codigoGenetico) {
        this.CodigoGenetico = codigoGenetico;
    };
    Animal.prototype.getCodigoGenetico = function () {
        return this.CodigoGenetico;
    };
    Animal.prototype.apresentacao = function () {
        return "Olah sou um SER VIVO.";
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, codigoGenetico, caracteristicas) {
        if (nome === void 0) { nome = ""; }
        if (codigoGenetico === void 0) { codigoGenetico = "DNA de Cachorro"; }
        if (caracteristicas === void 0) { caracteristicas = ""; }
        var _this = _super.call(this, nome, codigoGenetico) || this;
        _this.Caracteristicas = caracteristicas;
        return _this;
    }
    Cachorro.prototype.apresentacao = function () {
        return "Olah sou um CACHORRO.";
    };
    Cachorro.prototype.setCodigoGenetico = function (codigoGenetico) {
        this.CodigoGenetico = codigoGenetico;
    };
    Cachorro.prototype.getCodigoGenetico = function () {
        return this.CodigoGenetico;
    };
    Cachorro.prototype.getCaracteristicas = function () {
        return this.Caracteristicas;
    };
    Cachorro.prototype.apresentacaoTipoBase = function () {
        return _super.prototype.apresentacao.call(this);
    };
    return Cachorro;
}(Animal));
var serVivo;
var dalmata;
serVivo = new Animal("Baby");
dalmata = new Cachorro("Dalmy", null, "Pintas pretas pelo corpo afora");
console.log(serVivo.apresentacao());
console.log(dalmata.apresentacao());
console.log(serVivo.getCodigoGenetico());
console.log(dalmata.getCodigoGenetico());
dalmata.setCodigoGenetico("DNA de Cachorro!");
console.log(dalmata.getCodigoGenetico());
console.log(dalmata.apresentacaoTipoBase());
console.log(dalmata.getCaracteristicas());
