// Atencao aa sintaxe.
//A sintaxe a?: number eh equivalente a a:number = 0. Pois o default de um number eh 0.
function somar(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    return a + b;
}
var resultado = somar(3, 5);
console.log("Result: " + resultado);
resultado = somar(3, 6);
console.log("Result: " + resultado);
resultado = somar(5);
console.log("Result: " + resultado);
resultado = somar();
console.log("Result: " + resultado);
