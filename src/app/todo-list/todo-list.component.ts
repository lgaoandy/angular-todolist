import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks';
import { TasklistService } from '../tasklist.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks: Array<Task> = [];

  constructor(private tasklistService: TasklistService) { }

  ngOnInit(): void {
    this.tasks = this.getTasks();
  }

  getTasks() {
    return this.tasklistService.getTasks();
  }
}
