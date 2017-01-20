export class Meal {
  public date = new Date().toDateString();
  public hours = new Date().getHours();
  public minutes = new Date().getMinutes();
  constructor(public foods: string, public calories: number, public notes: string) {
  }
}
