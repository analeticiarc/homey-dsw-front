import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import api from "../services/api";

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
    standalone: true,
    imports: [CommonModule],
    styleUrl: './servico.css'
})
export class Servico implements OnInit {
    servicos: ServicoResponseDTO[] = [];

    async ngOnInit() {
        await this.carregarServicos()
    }

    async carregarServicos() {
        try {
            const response = await api.get<ServicoResponseDTO[]>('/servicos');
            this.servicos = response.data as any;
            console.log('Resposta /servicos:', response.data);
            console.log('Servicos no componente:', this.servicos);
        } catch (err) {
            console.error('Erro ao carregar serviços', err);
        }
    }

}
  