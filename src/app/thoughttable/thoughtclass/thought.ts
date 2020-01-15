export class Thought {
  private readonly thought: string;
  private readonly date: Date;

  constructor(thought, date) {
    this.thought = thought;
    this.date = date;
  }
}
