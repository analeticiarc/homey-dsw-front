import { Component, OnInit } from "@angular/core";
import axios from "axios";

interface CategoriaResponseDTO {
    id: number;
    nome: string;
}

interface ServicoResponseDTO {
    id: number;
    titulo: string;
    descricao: string;
    precoBase: number;
    disponivel: boolean;
    prestadorId: number;
    prestadorNome: string;
    categorias: CategoriaResponseDTO[];
    dataCriacao: string;
}

@Component({
    selector: 'app-servicos',
    templateUrl: './servico.component.html',
})
export class Servico implements OnInit {
    servicos: ServicoResponseDTO[] = [];

    async ngOnInit() {
        await this.carregarServicos()
    }

    async carregarServicos() {
        try {
            const response = await axios.get<ServicoResponseDTO>('/servicos');
            this.servicos = response.data;
        } catch (err) {
            console.error('Erro ao carregar serviços', err);
        }
    }

}
  