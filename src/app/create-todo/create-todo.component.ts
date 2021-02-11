import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks';
import { TasklistService } from '../tasklist.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  task: String;
  deadline: Date;
  revealDetails: Boolean = false;

  constructor(private tasklistService: TasklistService) { }

  ngOnInit(): void {
  }

  addTask(): void {
    if (this.task){
      this.tasklistService.addtask(new Task(this.task, this.deadline));
      this.clearTaskInput();
    }
  }

  clearTaskInput(): void {
    this.task = '';
    this.deadline = null;
    this.revealDetails = false;
  }

  revealDetail(): void {
    if (this.task && this.revealDetails === false){
      this.revealDetails = true;
    }
    else if (!this.task && this.revealDetails === true){
      this.revealDetails = false;
    }
  }
}
