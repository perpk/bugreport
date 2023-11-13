export class Bug {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private priority: number,
    private reporter: string,
    private status: string,
    private created: Date,
    private comments: Comment[]
  ) {}

  public getId() {
    return this.id;
  }

  public getTitle() {
    return this.title;
  }

  public getDescription() {
    return this.description;
  }

  public getPriority() {
    return this.priority;
  }

  public getReporter() {
    return this.reporter;
  }

  public getStatus() {
    return this.status;
  }

  public getCreated() {
    return this.created;
  }

  public getComments() {
    return this.comments;
  }
}
