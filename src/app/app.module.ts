import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployerComponent } from './employer/employer.component';

//form module for component values
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //imported
  ],
  providers: [],
  bootstrap: [EmployerComponent]
})
export class AppModule { }
