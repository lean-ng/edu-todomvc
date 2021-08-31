import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'todos-shell',
  templateUrl: './todos-shell.component.html',
  styleUrls: ['./todos-shell.component.css'],
})
export class TodosShellComponent {
  private lastId = 3;
  public todos: Todo[] = [
    { id: 1, title: 'Bootstrap', completed: true },
    { id: 2, title: 'Template Syntax', completed: false },
    { id: 3, title: 'Services', completed: false },
  ];
  constructor() {}

  createTodo(title: string) {
    const todo: Todo = { id: ++this.lastId, title, completed: false };
    // Mutation (Bad practice!?)
    // this.todos.push(todo);
    this.todos = this.todos.concat(todo);
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }
}
