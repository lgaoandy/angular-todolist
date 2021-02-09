import { Injectable } from '@angular/core';
import { Task } from './tasks';
import { CalculateService } from './calculate.service';
import { moveMessagePortToContext } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  tasks: Array<Task> = [];

  constructor(private calculateService : CalculateService) { }

  getTasks() {
    return this.tasks;
  }

  addtask(task: Task): void {
    this.checkDeadline(task);
    this.tasks.push(task);
    console.log(task);
  }

  checkDeadline(task: Task): void {
    if (task.deadline){
      task.daysLeft = this.calculateService.calculateDaysLeft(task);
    }
  }
}
