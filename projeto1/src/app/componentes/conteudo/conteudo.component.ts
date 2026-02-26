import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-conteudo',
    templateUrl: './conteudo.component.html',
    styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

    public mensagem: string;
    public valor: number;
    public link_foto: string;
    public textoForm: string;
    public senha: string = '';
    public clicado: boolean;


    public constructor() {
        this.mensagem = 'Eu sou o conteudo.component!';
        this.valor = 0;
        this.link_foto = '/assets/imagem2.jpg';
        this.textoForm = '';
        this.clicado = true;
    }

    ngOnInit(): void {

    }

    public mudarValor() {
        this.valor++;
        this.link_foto = '/assets/download.jpg';

    }

    public enviarDados() {
        console.log('Login: ' + this.textoForm + ' / ' + 'Senha: ' + this.senha + ' / ' + 'Clicado? ' + this.clicado);

    }
}
