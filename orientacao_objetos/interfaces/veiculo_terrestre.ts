interface VeiculoTerrestre{
    NumeroDeRodas: number;
    CodigoChassi: string;

    //Assinatura de metodos obrigatorios a serem implementados
    setCodigoChassi(codigoChassi: string);
    getCodigoChassi(): string;
    getInformacaoLegal(): string;

}

//Uma classe que implementa uma interface deve declarar todas as propriedades presentes na interface e implemetar todos os metodos assinados na interface
class Carro implements VeiculoTerrestre{
    
    NumeroDeRodas: number;    
    CodigoChassi: string;

    setCodigoChassi(codigoChassi: string) {
        this.CodigoChassi = codigoChassi;
    }
    getCodigoChassi(): string {
        return this.CodigoChassi;
    }

    getInformacaoLegal(): string {
        //throw new Error("Method not implemented.");
        return "ESTE VEICULO FOI PROJETADO PARA CIRCULAR NA TERRA";
    }    
}