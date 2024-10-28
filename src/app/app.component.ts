import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // FormsModule'u import ediyoruz
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { InputComponent } from './shared/components/input/input.component';
import { RadioButtonComponent } from './shared/components/radio-button/radio-button.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './shared/components/popup/popup.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule, // FormsModule'u standalone bileşene ekliyoruz
    TodoListComponent,
    InputComponent,
    RadioButtonComponent,
    PopupComponent,
    ButtonComponent,
    TabsComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showModal: boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  title = 'etiya9.angular';

  // Burada usernameValue ve passwordValue değişkenlerini tanımlıyoruz
  usernameValue: string = '';
  passwordValue: string = ''; // Burada passwordValue değişkeni tanımlandı

  selectedNationality: string = '';

  handleSelection(value: string) {
    this.selectedNationality = value;
  }

  handleButtonClick() {
    console.log('Button clicked!');
  }

  tabs = ['B2C', 'B2B'];
}
