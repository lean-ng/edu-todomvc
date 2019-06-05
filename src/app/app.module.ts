import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { StateService } from './todos/services/state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodosModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
