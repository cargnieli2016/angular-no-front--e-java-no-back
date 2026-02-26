"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(id, no, sa) {
        this.id = id;
        this.nome = no;
        this.salario = sa;
    }
    Pessoa.prototype.exibir = function () {
        console.log("Pessoa =  " + this.id + " - " + this.nome + " - " + this.salario);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
