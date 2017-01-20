import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector:'meal-edit',
  template: `
  <div  *ngIf="childCurrentMeal">
    <div class="inputForm{{childCurrentMeal.day}}">
      <h4>Edit Meal from {{childCurrentMeal.dateString}}</h4>
      <div class="form-group">
        <label>Foods:</label>
        <input class="form-control" [(ngModel)]="childCurrentMeal.foods">
      </div>
      <div class="form-group">
        <label>Calories:</label>
        <input type="number" class="form-control" [(ngModel)]="childCurrentMeal.calories">
      </div>
      <div class="form-group">
        <label>Notes:</label>
        <input class="form-control" [(ngModel)]="childCurrentMeal.notes">
      </div>
      <br>
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
