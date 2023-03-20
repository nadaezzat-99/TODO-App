import { Component } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  searchText: string = '';
  todos: Todo[] = [
    {
      id: 1,
      todo: 'Do something nice for someone I care about',
      completed: false,
      userID: 20,
    },
    {
      id: 2,
      todo: 'Memorize the fifty states and their capitals',
      completed: false,
      userID: 48,
    },
    {
      id: 3,
      todo: 'Watch a classic movie',
      completed: false,
      userID: 4,
    },
  ];

  allTodos: Todo[] = [...this.todos];

  newTodoTitle: string = '';
  constructor() {}

  addTodo($newTodoTitle: string) {
    if (this.newTodoTitle.trim().length > 0) {
      let newId: number;
      console.log(this.allTodos.length);
      
      if (this.allTodos.length > 0)
        newId = this.allTodos[this.todos.length - 1].id + 1;
      else newId = 1;
      this.allTodos.push({
        todo: $newTodoTitle,
        userID: 1,
        completed: false,
        id: newId,
      });
      this.todos = [...this.allTodos];
    } else alert('Please Add vallid Todo');
  }

  removeTodo(todo: Todo) {
    console.log(this.allTodos);
    this.allTodos.splice(this.allTodos.indexOf(todo), 1);
    this.todos = [...this.allTodos];
  }

  editTodoStatus(id: number) {
    let selectedTodo: number = this.allTodos.findIndex(
      (todo) => todo.id === id
    );
    if (selectedTodo !== -1) {
      this.allTodos[selectedTodo].completed = !this.allTodos[selectedTodo].completed;
      this.todos = [...this.allTodos];
      console.log(this.todos)
    }
  }

  diplayCompleted() {
    this.todos = this.allTodos.filter((todo) => todo.completed === true);
  }

  displayTodo() {
    this.todos = this.allTodos.filter((todo) => todo.completed === false);
  }

  diplayAllTodos() {
    this.todos = this.allTodos;
  }
}
