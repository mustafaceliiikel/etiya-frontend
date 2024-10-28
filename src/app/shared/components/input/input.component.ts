import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true, // Standalone özelliği ekleniyor
  imports: [FormsModule, CommonModule], // FormsModule ekliyoruz, çünkü ngModel kullanıyoruz
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string = ''; // Label zorunlu
  @Input() type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'date' =
    'text'; // Input type
  @Input() placeholder: string = ''; // Placeholder opsiyonel
  @Input() icon?: any; // Icon opsiyonel
  @Input() isDisabled: boolean = false; // Disable opsiyonel
  @Input() helperText?: string; // Hata mesajı opsiyonel
  @Input() value: string = ''; // Inputun değeri

  // Değişiklikleri ele almak için bir fonksiyon
  handleInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
  }
}
