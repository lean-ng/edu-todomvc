import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'todos-actionbar',
  templateUrl: './todos-actionbar.component.html',
  styleUrls: ['./todos-actionbar.component.css'],
})
export class TodosActionbarComponent implements OnChanges {
  @Input()
  public todos!: Todo[];

  public activeCount = 0;

  constructor(public svc: StateService) {}

  // Lifecylce-Hook
  // wird aufgerufe, wenn sich Inputs der Komponente ändern!
  ngOnChanges(changes: SimpleChanges) {
    console.log('Änderung:', changes);
    this.activeCount = this.todos.reduce(
      (count, t) => (!t.completed ? count + 1 : count),
      0
    );
  }
}
