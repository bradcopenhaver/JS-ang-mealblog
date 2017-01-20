import { Component } from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Logger</h1>
  <meal-list [childMealList]="masterMealList" (editMealSender)="editMeal($event)"></meal-list>
  <meal-new (newMealSender)="addNewMeal($event)"></meal-new>
  <meal-edit [childCurrentMeal]="clickedMeal" (doneSender)="doneEditing()"></meal-edit>
  `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal("Frosted Mini Wheats with 2% milk", 536, "Two bowls of...", "Mon Jan 16 2017", 1),
    new Meal("Chili cheesey mac", 2400, "The pasta was organic.", "Mon Jan 17 2017", 1),
    new Meal("Rice crackers", 200, "Least satisfying snack ever.", "Thu Jan 19 2017", 4),
    new Meal("Subway Italian BMT", 740, "I was going to save half for later, but I didn't.")
  ]

  clickedMeal= null;

  addNewMeal(newMeal) {
    this.masterMealList.push(newMeal);
  }
  editMeal(childClickedMeal) {
    this.clickedMeal = childClickedMeal;
  }
  doneEditing(){
    this.clickedMeal = null;
  }
}
