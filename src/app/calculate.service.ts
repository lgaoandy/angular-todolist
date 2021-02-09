import { Injectable } from '@angular/core';
import { Task } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  today: number = new Date().getTime();
  deadline: number;
  msPerDay: number = 1000*60*60*24;

  constructor() { }

  calculateDaysLeft(task: Task): number {
    this.deadline = new Date(task.deadline).getTime();
    return Math.ceil((this.deadline - this.today)/this.msPerDay);
  }
}
