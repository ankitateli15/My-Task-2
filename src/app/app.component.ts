import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test-2';
  showFour = true;
  changeTitleValue() {
    this.title = 'Ankita Teli';
  }
  changeTitleValueAgain() {
    this.title = 'abc';
  }
  removeShowValue() {
    this.showFour = false;
  }


}
