import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../../models/todoItem';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from '../todo-card/todo-card.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule, TodoCardComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todo: string = '';
  todoList: TodoItem[] = [];
  apiUrl: string = 'https://jsonplaceholder.typicode.com/todos'; // API URL

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchTodos();
  }

  // GET ile todos'ları çekme
  fetchTodos() {
    this.httpClient.get<TodoItem[]>(this.apiUrl).subscribe({
      next: (response: TodoItem[]) => {
        this.todoList = response.slice(0, 0);
      },
      error: (err: any) => {
        console.log('HATA', err);
      },
      complete: () => {
        console.log('İstek başarılı bitti');
      },
    });
  }

  // POST işlemi - Yeni todo ekleme
  addTodo() {
    const trimmedTodo = this.todo.trim();
    if (!trimmedTodo) {
      alert('Todo boş olamaz!');
    } else {
      const newTodo = {
        title: trimmedTodo,
        completed: false,
        userId: 1,
      };

      // POST isteği
      this.httpClient.post<TodoItem>(this.apiUrl, newTodo).subscribe({
        next: (response) => {
          // Başarılı olursa todoList'e yeni eklenen todo'yu ekleyelim
          this.todoList.push(response);
          this.todo = ''; // Giriş alanını temizle
        },
        error: (err) => {
          console.error('Todo eklenirken hata oluştu', err);
        },
        complete: () => {
          console.log('POST işlemi başarılı');
        },
      });
    }
  }

  deleteTodoByName(todoName: string) {
    this.todoList = this.todoList.filter((todo) => todo.title !== todoName);
  }
}
