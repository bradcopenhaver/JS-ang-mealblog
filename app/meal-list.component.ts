import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
    <h2>Recorded Meals:</h2>
    <h4>Filter by:</h4>
    <label>Max calories:</label>
    <select (change)="updateCalorieLimit($event.target.value)">
      <option value=500>500</option>
      <option value=2000>2000</option>
      <option value=0 selected>No Limit</option>
    </select>
    <div class="mealTile" *ngFor="let currentMeal of childMealList | calorieLimit:calorieLimit">
      <h5>{{currentMeal.timeStamp}}</h5>
      <p>{{currentMeal.foods}}</p>
      <p>Calories: {{currentMeal.calories}}</p>
      <p>Notes: {{currentMeal.notes}}</p>
      <button class="btn" (click)="editThisMeal(currentMeal)">Edit This Meal</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() editMealSender = new EventEmitter;

  calorieLimit: number = 0;

  editThisMeal(clickedMeal){
    this.editMealSender.emit(clickedMeal);
  }
  updateCalorieLimit(upperLimit: number) {
    this.calorieLimit = upperLimit;
  }
}
