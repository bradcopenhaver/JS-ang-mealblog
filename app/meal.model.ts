export class Meal {
  public timeStamp = Date();
  constructor(public foods: string, public calories: number, public notes: string) {
  }
}
