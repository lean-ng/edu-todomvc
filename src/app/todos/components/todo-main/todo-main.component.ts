import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoMainComponent implements OnInit {

  @Input()
  todos: Todo[];

  constructor() { }

  ngOnInit() {
  }

}
