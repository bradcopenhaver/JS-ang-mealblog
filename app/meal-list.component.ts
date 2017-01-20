import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
    <h2>Recorded Meals:</h2>
    <div class="mealTile" *ngFor="let currentMeal of childMealList">
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

  editThisMeal(clickedMeal){
    this.editMealSender.emit(clickedMeal);
  }
}
