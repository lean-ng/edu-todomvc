import { Todo } from '../models/todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  todos: Todo[];

  constructor() {

    const mockData: Todo[] = [
      { id: 1, title: 'Template Syntax', completed: true },
      { id: 2, title: 'Component Interaction', completed: false },
      { id: 3, title: 'Services and DI', completed: false },
    ];

    this.todos = JSON.parse(localStorage.todos ||
      JSON.stringify(mockData)
    );

    setInterval( () => {}, 2000);
  }

  createTodo(title: string) {
    const nextId = JSON.parse(localStorage.nextId || '4');

    const todo = Object.freeze({ id: nextId, title, completed: false });
    this.todos = [
      ...this.todos,
      todo
    ];

    localStorage.todos = JSON.stringify(this.todos);
    localStorage.nextId = nextId + 1;
  }

  toggleTodo(todo: Todo) {
    const ix = this.todos.findIndex(t => t.id === todo.id);

    this.todos[ix] = { ...todo, completed: !todo.completed };
    this.todos = [ ...this.todos ];

    localStorage.todos = JSON.stringify(this.todos);
  }
}
