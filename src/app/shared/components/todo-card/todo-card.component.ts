import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  @Input() toDoFromOtherPage: string = '';
  @Input() todoId!: number; // Todo ID'sini alma
  @Output() onRemoveClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {} // Router'ı inject etme

  onRemove() {
    this.onRemoveClick.emit(this.toDoFromOtherPage);
  }

  goToDetail() {
    this.router.navigate(['/todo-details', this.todoId]);
  }
}




