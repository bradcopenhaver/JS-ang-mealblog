import {Component, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector:'meal-new',
  template:`
  <button class="btn" (click)="newMealForm()">Log a New Meal</button>
  <div  *ngIf="newMeal">
    <div class="inputForm">
      <h3>New Meal</h3>
      <label>Foods:</label>
      <input #newFoods>
      <label>Calories:</label>
      <input #newCalories>
      <label>Notes:</label>
      <input #newNotes>
      <button class="btn" (click)="addMeal(newFoods.value, newCalories.value, newNotes.value)">Add Meal</button>
      <button class="btn" (click)="cancel()">Cancel</button>
    </div>
  </div>
  `
})

export class MealNewComponent {
  @Output() newMealSender = new EventEmitter();
  newMeal = null;

  newMealForm() {
    this.newMeal=true;
  }
  cancel() {
    this.newMeal=null;
  }
  addMeal(foods: string, calories: number, notes: string) {
    var newMeal = new Meal(foods, calories, notes);
    this.newMealSender.emit(newMeal);
    this.newMeal=null;
  }
}
