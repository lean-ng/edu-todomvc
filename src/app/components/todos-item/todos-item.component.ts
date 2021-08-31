import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'],
})
export class TodosItemComponent {
  @Input()
  public todo!: Todo;

  constructor(private svc: StateService) {}

  toggleCompletedState() {
    this.svc.toggleTodoState(this.todo);
  }

  deleteTodo() {
    this.svc.removeTodo(this.todo);
  }
}
