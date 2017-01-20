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
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];

}
