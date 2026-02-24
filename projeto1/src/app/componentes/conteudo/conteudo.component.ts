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

    public constructor() {
        this.mensagem = 'Eu sou o conteudo.component!';
        this.valor = 0;
        this.link_foto = '/assets/imagem2.jpg';
    }

    ngOnInit(): void {

    }

    public mudarValor() {
        this.valor++;
        this.link_foto = '/assets/download.jpg';
        
    }

}
