import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosShellComponent } from './components/todos-shell/todos-shell.component';
import { TodosMainComponent } from './components/todos-main/todos-main.component';
import { TodosInputComponent } from './components/todos-input/todos-input.component';
import { TodosActionbarComponent } from './components/todos-actionbar/todos-actionbar.component';
import { TodosItemComponent } from './components/todos-item/todos-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosShellComponent,
    TodosMainComponent,
    TodosInputComponent,
    TodosActionbarComponent,
    TodosItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
