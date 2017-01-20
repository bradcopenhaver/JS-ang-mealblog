import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {MealListComponent} from './meal-list.component';
import {MealNewComponent} from './meal-new.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent,
                  MealListComponent,
                  MealNewComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
