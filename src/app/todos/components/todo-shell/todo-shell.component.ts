import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state';

@Component({
  selector: 'todo-shell',
  templateUrl: './todo-shell.component.html',
  styleUrls: ['./todo-shell.component.css']
})
export class TodoShellComponent implements OnInit {

  get todos() { return this.state.todos; }

  constructor(private state: StateService) { }

  ngOnInit() {
  }

  createTodo(title: string) {
    this.state.createTodo(title);
  }
}
