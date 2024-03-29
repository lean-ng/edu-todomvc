import { Component, Input } from '@angular/core';
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
}
