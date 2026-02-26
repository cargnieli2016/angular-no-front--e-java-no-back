export class Pessoa {
    // defino os atributos que caracterizam uma Pessoa
    private id: number;
    private nome: string;
    private salario: number;

    public constructor(id: number, no: string, sa: number) {
        this.id = id;
        this.nome = no;
        this.salario = sa;
    }

    public exibir(): void {
        console.log("Pessoa =  " + this.id + " - " + this.nome + " - " + this.salario);
    }

}
