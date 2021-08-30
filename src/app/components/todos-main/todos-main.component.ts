import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'todos-main',
  templateUrl: './todos-main.component.html',
  styleUrls: ['./todos-main.component.css'],
})
export class TodosMainComponent {
  public todos: Todo[] = [
    { id: 1, title: 'Bootstrap', completed: true },
    { id: 1, title: 'Template Syntax', completed: false },
    { id: 2, title: 'Services', completed: false },
  ];
  constructor() {}
}
