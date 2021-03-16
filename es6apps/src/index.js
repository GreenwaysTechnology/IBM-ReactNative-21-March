import { message, sayHello } from './mylib';
import TodoService, { todoversion } from './services/TodoService';

console.log(message, sayHello());

let todo = new TodoService();
console.log(todo.findAll(),todoversion)
