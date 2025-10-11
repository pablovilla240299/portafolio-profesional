import { RouterModule } from '@angular/router';
import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  previousScrollPosition = 0;
  isMenuVisible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.previousScrollPosition && currentScroll > 100) {
      this.isMenuVisible = false; // scroll hacia abajo
    } else {
      this.isMenuVisible = true; // scroll hacia arriba
    }

    this.previousScrollPosition = currentScroll;
  }
}