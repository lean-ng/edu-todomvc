import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'todos-main',
  templateUrl: './todos-main.component.html',
  styleUrls: ['./todos-main.component.css'],
})
export class TodosMainComponent {
  @Input()
  public todos!: Todo[];
  constructor() {}

  @Output()
  destroy = new EventEmitter<Todo>();

  deleteTodo(todo: Todo) {
    // Mutation, damit es alle mitbekommen!!
    // Bad practice!
    // const ix = this.todos.indexOf(todo);
    // this.todos.splice(ix, 1);
    this.destroy.emit(todo);
  }
}
