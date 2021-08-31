import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'],
})
export class TodosItemComponent {
  @Input()
  public todo!: Todo;
  constructor() {
    console.log('Item constructed');
  }

  @Output()
  public destroy = new EventEmitter();

  toggleCompletedState() {
    // Mutation des Objektes (alle bekommen es mit)
    // Bad practice!
    this.todo.completed = !this.todo.completed;
  }
  deleteTodo() {
    // Nachricht verschicken bzw. Event auslösen
    this.destroy.emit();
  }
}
