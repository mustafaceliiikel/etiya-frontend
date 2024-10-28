import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() groupName: string = '';
  @Input() isChecked: boolean = false;
  @Output() onSelected = new EventEmitter<string>();

  handleSelection() {
    console.log('Selection handled: ', this.value); // Tıklama kontrolü için log ekleyelim
    this.onSelected.emit(this.value);
  }
}
