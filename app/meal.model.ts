export class Meal {
  public timeStamp = Date.now();
  constructor(public foods: string[], public calories: number, public notes: string) {
  }
}
