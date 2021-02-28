import { Todo } from './todo.class';

export class TodoList {

  constructor() {
    // this.todos = [];
    this.getTodoFromLocalStorage();
  }

  addTodo( todo ) {
    this.todos.push( todo );
    this.setTodoInLocalStorage();
  }
  
  removeTodo( id ) {
    this.todos = this.todos.filter( todo => todo.id !== id );
    this.setTodoInLocalStorage();
  }
  
  removeCompletedTodos() {
    this.todos = this.todos.filter( todo => !todo.completed );
    this.setTodoInLocalStorage();
  }

  toggleTodoState( id ) {
    for( let todo of this.todos ) {
      if( todo.id === id ) {
        todo.completed = !todo.completed;
      }
    } 
    this.setTodoInLocalStorage(); 
  }

  setTodoInLocalStorage() {
    localStorage.setItem( 'todo', JSON.stringify( this.todos ) );
  }

  getTodoFromLocalStorage() {
    this.todos = ( localStorage.getItem( 'todo' ) )
                  ? JSON.parse( localStorage.getItem( 'todo' ) )
                  : [];

    // Esto se hace, ya que la asignacion anterior devuelve
    // Objetos literales y no instancias de la clase Todo.
    this.todos = this.todos.map( Todo.newTodoFromJson );
  }

}