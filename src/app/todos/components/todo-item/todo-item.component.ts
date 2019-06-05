import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../../models/todo';
import { StateService } from '../../services/state';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(private state: StateService) { }

  ngOnInit() {
  }

  toggle() {
    this.state.toggleTodo(this.todo);
  }


}
