import { Component } from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Logger</h1>
  <meal-list [childMealList]="masterMealList"></meal-list>
  <meal-new (newMealSender)="addNewMeal($event)"></meal-new>
  `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal("Chili cheesey mac", 600, "The pasta was organic."),
    new Meal("Subway Italian BMT", 740, "I was going to save half for later, but I didn't."),
    new Meal("Frosted Mini Wheats with 2% milk", 536, "Two bowls of...")
  ]

  addNewMeal(newMeal) {
    this.masterMealList.push(newMeal);
  }
}
