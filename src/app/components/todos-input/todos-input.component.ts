import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todos-input',
  templateUrl: './todos-input.component.html',
  styleUrls: ['./todos-input.component.css'],
})
export class TodosInputComponent {
  constructor() {}

  @Output()
  public create = new EventEmitter<string>();

  createTodo(title: string) {
    if (title) {
      this.create.emit(title);
    }
  }
}
