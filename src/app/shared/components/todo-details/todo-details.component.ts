import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class TodoDetailsComponent implements OnInit {
  todoId!: number;
  todoDetail: any; // Gelen veriyi saklamak için

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // Route parametresinden ID'yi alma
    this.todoId = +this.route.snapshot.paramMap.get('id')!;

    // Bu ID'ye göre veriyi getirmek
    this.getTodoDetail(this.todoId);
  }

  // API'den Todo Detayını Çekme
  getTodoDetail(id: number) {
    this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`).subscribe({
      next: (response) => {
        this.todoDetail = response; // Veriyi saklama
        console.log('Todo Detayı:', this.todoDetail);
      },
      error: (err) => {
        console.error('Hata oluştu:', err);
      }
    });
  }
}
