import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { Router } from "@angular/router";

interface CriarServicoDTO {
    titulo: string;
    descricao?: string;
    precoBase: number;
    disponivel: boolean;
    categorias: string[];
}

@Component({
    selector: 'app-servicos',
    templateUrl: './servico.component.html',
})
export class CriarServico {
    titulo = '';
    descricao = '';
    precoBase!: number;
    disponivel = true;
    categoriasTexto = '';
    erro?: string;

    constructor(private router: Router) {}

    async criarServico() {
        const payload: CriarServicoDTO = {
            titulo: this.titulo,
            descricao: this.descricao,
            precoBase: this.precoBase,
            disponivel: this.disponivel,
            categorias: this.categoriasTexto ? this.categoriasTexto.split(',').map(c => c.trim()) : []
        }

        try {
            await axios.post('/servicos', payload)

            this.router.navigate(['/servicos']);
        } catch (error: any) {
            this.erro = error?.response?.data ?? "Erro ao criar o serviço!";
        }
    }
}