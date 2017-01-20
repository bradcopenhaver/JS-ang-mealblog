import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calorie-limit",
  pure: false
})

export class CalorieLimitPipe implements PipeTransform {
  transform(input:Meal[], calorieLimit) {
    var output: Meal[] = [];
    if(calorieLimit !=null){
      for(var i=0; i<input.length; i++){
        if (input[i].calories <= calorieLimit) {
          output.push(input[i]);
        }
      }
    } else {
      output = input;
    }
    return output;
  }
}
