import {Component, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector:'meal-new',
  template:`
  <button class="btn" (click)="newMealForm()">Log a New Meal</button>
  <div  *ngIf="newMeal">
    <div class="newMealInputForm">
      <h3>New Meal</h3>
      <div class="form-group">
        <label>Foods:</label>
        <input class="form-control" #newFoods>
      </div>
      <div class="form-group">
        <label>Calories:</label>
        <input type="number" class="form-control" #newCalories>
      </div>
      <div class="form-group">
        <label>Notes:</label>
        <input class="form-control" #newNotes>
      </div>
      <br>
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
