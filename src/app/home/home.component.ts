import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  template: `
  <div class="container mt-5">
    <h1 class="text-primary">El nombre es {{useername()}}</h1>
  </div>
  `,
})
export class HomeComponent {
  mensaje = 'bienvenido a mi portafolio';
  useername = signal('El papa de los pollitos');
}
