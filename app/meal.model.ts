export class Meal {
  public hours = new Date().getHours();
  public minutes = new Date().getMinutes();
  constructor(public foods: string, public calories: number, public notes: string, public dateString: string = new Date().toDateString(), public day: number = new Date().getDay()) {}
}
