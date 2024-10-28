import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string = ''; // Buton içindeki yazı
  @Input() isDisabled: boolean = false; // Butonun etkin olup olmadığını belirten değer
  @Input() type: 'primary' | 'secondary' = 'primary'; // Buton türü (primary veya secondary)
  @Input() width: string = 'auto'; // Buton genişliği

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.isDisabled) {
      this.onClick.emit();
    }
  }
}
