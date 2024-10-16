import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { TodoDetailsComponent } from './shared/components/todo-details/todo-details.component';


export const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todo-details/:id', component: TodoDetailsComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
