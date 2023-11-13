export class Comment {
  constructor(private reporter: string, private description: string) {}

  public getReporter() {
    return this.reporter;
  }

  public getDescription() {
    return this.description;
  }
}
