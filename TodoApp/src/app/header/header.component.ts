import { Component } from '@angular/core';

@Component({
  selector: 'todo-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  logoName = 'Todo App';
}
