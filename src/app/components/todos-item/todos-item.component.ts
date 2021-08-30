import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'],
})
export class TodosItemComponent {
  @Input()
  public todo!: Todo;
  constructor() {}
}
