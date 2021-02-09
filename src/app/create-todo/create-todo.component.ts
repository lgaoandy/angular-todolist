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
  }
}
