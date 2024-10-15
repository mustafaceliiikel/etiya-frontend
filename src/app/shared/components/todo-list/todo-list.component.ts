import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  todo: string = '';
  todoList: string[] = [];

  addTodo() {
    const trimmedTodo = this.todo.trim();
    if (!trimmedTodo) {
      alert("Todo cannot be empty!");
    } else if (this.todoList.includes(trimmedTodo)) {
      alert("This todo already exists!");
    } else {
      this.todoList.push(trimmedTodo);
      this.todo = '';
    }
  }

  deleteTodo(index: number) {
    this.todoList.splice(index, 1);
  }
}
