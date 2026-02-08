import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, AppHeaderComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('homey-dsw-front');
}
