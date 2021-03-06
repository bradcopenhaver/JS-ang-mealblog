import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule} from '@angular/forms';
import {MealListComponent} from './meal-list.component';
import {MealNewComponent} from './meal-new.component';
import {MealEditComponent} from './meal-edit.component';
import {CalorieLimitPipe} from './calorieLimit.pipe';
import {MinuteDisplayPipe} from './minuteDisplay.pipe';

@NgModule({
  imports: [BrowserModule,
            FormsModule],
  declarations: [ AppComponent,
                  MealListComponent,
                  MealNewComponent,
                  MealEditComponent,
                  CalorieLimitPipe,
                  MinuteDisplayPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
