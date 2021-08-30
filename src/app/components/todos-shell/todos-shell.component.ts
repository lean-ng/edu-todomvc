import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'todos-shell',
  templateUrl: './todos-shell.component.html',
  styleUrls: ['./todos-shell.component.css'],
})
export class TodosShellComponent {
  public todos: Todo[] = [
    { id: 1, title: 'Bootstrap', completed: true },
    { id: 1, title: 'Template Syntax', completed: false },
    { id: 2, title: 'Services', completed: false },
  ];
  constructor() {}
}
