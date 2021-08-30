import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'],
})
export class TodosItemComponent {
  public todo: Todo = { id: 42, title: 'Template Syntax', completed: false };
  constructor() {}
}
