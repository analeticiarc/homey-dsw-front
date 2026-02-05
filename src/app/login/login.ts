
import { Component, signal } from '@angular/core';
import axios from 'axios';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  async onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    try {
      const response = await axios.post('/login', {
        email: this.email,
        password: this.password
      });
      if (response.status === 200) {
        this.successMessage = 'Login realizado com sucesso!';
        // Redirecionar ou salvar token, se necessário
      } else {
        this.errorMessage = 'Falha no login. Verifique suas credenciais.';
      }
    } catch (error: any) {
      this.errorMessage = error?.response?.data?.message || 'Erro ao tentar fazer login.';
    }
  }
}
