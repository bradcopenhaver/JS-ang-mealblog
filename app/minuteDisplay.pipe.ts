import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "minuteDisplay",
  pure: false
})

export class MinuteDisplayPipe implements PipeTransform {
  transform(minutes) {
    var output: string = "";
    if(minutes < 10){
      output = "0" + minutes.toString();
      } else {
      output = minutes.toString();
    }
    return output;
  }
}
