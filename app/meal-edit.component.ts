import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector:'meal-edit',
  template: `
  <div  *ngIf="childCurrentMeal">
    <div class="inputForm">
      <h4>Edit Meal from {{childCurrentMeal.timeStamp}}</h4>
      <label>Foods:</label>
      <input [(ngModel)]="childCurrentMeal.foods">
      <label>Calories:</label>
      <input [(ngModel)]="childCurrentMeal.calories">
      <label>Notes:</label>
      <input [(ngModel)]="childCurrentMeal.notes">
      <button class="btn" (click)="done()">Done</button>
    </div>
  </div>
  `
})

export class MealEditComponent {
  @Input() childCurrentMeal: Meal;
  @Output() doneSender = new EventEmitter;

  editMeal = null;

  editMealForm(){
    this.editMeal = true;
  }
  done(){
    this.doneSender.emit();
  }
}
