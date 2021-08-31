import { Component, DoCheck } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'todos-shell',
  templateUrl: './todos-shell.component.html',
  styleUrls: ['./todos-shell.component.css'],
})
export class TodosShellComponent implements DoCheck {
  public todos: Todo[] = [];

  constructor(private svc: StateService) {}

  // Angular prüft nach einem "Anwendungs-Event" von Top nach Down Inputs.
  // Falls ein Input sich änderte (neue Referenz!): ngOnChanges
  // Anschließend in jedem Fall: ngDoCheck
  ngDoCheck() {
    // Hat der Service "neue" Todos?
    if (this.todos !== this.svc.todos) {
      this.todos = this.svc.todos;
    }
  }

  createTodo(title: string) {
    // Delegate an Service
    this.svc.createTodo(title);
  }
}
