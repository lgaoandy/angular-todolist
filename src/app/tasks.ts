export class Task {
   name: string;
   deadline?: Date;
   daysLeft?: Number;

   constructor(name, deadline) {
    this.name = name;
    this.deadline = deadline;
   }
}