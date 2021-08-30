import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'todos-actionbar',
  templateUrl: './todos-actionbar.component.html',
  styleUrls: ['./todos-actionbar.component.css'],
})
export class TodosActionbarComponent {
  @Input()
  public todos!: Todo[];
  constructor() {}
}
