// O tipo any define que a variável declarada pode ser de qualquer tipo, e o compilador não vai reclamar

var qualquerTipo: any;
qualquerTipo = "Mensagem";
console.log("Tipo any string: " + qualquerTipo);

qualquerTipo = 10.0;
console.log("Tipo any number: " + qualquerTipo);

qualquerTipo = true;
console.log("Tipo any boolean: " + qualquerTipo);
console.log();

// O tipo union estabelece quais tipos uma variável pode assumir, usa-se a barra vertical (pipe) como separador de tipos
var tipoUnion : number | string | boolean;

tipoUnion = 3.141516;
console.log("Tipo union number: " + tipoUnion);

tipoUnion = "PI";
console.log("Tipo union string: " + tipoUnion);

tipoUnion = false;
console.log("Tipo union boolean: " + tipoUnion);
