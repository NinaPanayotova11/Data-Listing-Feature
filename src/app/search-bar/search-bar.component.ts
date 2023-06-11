import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  searchTerm = '';
  constructor() {}
  onInput(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }
  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.searchTerm);
  }
}
