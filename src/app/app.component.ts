import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  taskList: string[] = []
  userPlaceholder: string = 'enter your task'

  onAddTask(text: any) {
    this.taskList.push(text.value)
    text.value = ''

  }

  onDelete(taskNo: number) {
    this.taskList.splice(taskNo, 1)

  }

}
