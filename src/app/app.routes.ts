
import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Servico } from './servico/servico';
import { CriarServico } from './criar-servico/criar-servico';

export const routes: Routes = [
	{ path: 'login', component: Login },
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'servicos', component: Servico },
	{ path: 'servicos/novo', component: CriarServico },
];
