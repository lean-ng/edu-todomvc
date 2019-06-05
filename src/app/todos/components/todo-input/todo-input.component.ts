import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {


  @Output()
  create = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  createTodo(title: string) {
    if (title.trim().length > 0) {
      this.create.emit(title.trim());
    }
  }
}
