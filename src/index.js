import './styles.css';
import { Todo, TodoList } from './js/classes';
import { createTodoInHtml } from './js/componentes';

// Global Data
export const todoList = new TodoList;
todoList.todos.forEach( createTodoInHtml );
console.log( todoList );

// HTML References
const todoInputText    = document.querySelector( '.new-todo' ),
  todoListContainer    = document.querySelector( '.todo-list' ),
  deleteCompletedTodos = document.querySelector( '.clear-completed' ),
  filterTodoList       = document.querySelector( '.filters' ),
  anchorFilters        = document.querySelectorAll( '.filtro' );

// Events
todoInputText.addEventListener( 'keyup', (e) => {
  if( e.key === 'Enter' ) {
    if( todoInputText.value.length > 0 ) {
      const newTodo = new Todo( todoInputText.value );
      todoList.addTodo( newTodo );
      todoInputText.value = '';
      createTodoInHtml( newTodo );
      console.log( newTodo );
    } else {
      alert( '¡Debes incluir algo de texto en tu nueva tarea!' );
    }
  }
});

todoListContainer.addEventListener( 'click', (e) => {
  const elementName = e.target.localName, // input, label or button
    todoElement   = e.target.parentElement.parentElement, // li
    todoId        = parseInt(todoElement.getAttribute( 'data-id' ));

  if( elementName === 'input') {
    todoList.toggleTodoState( todoId );
    todoElement.classList.toggle( 'completed' );
  } else if( elementName === 'button' ) {
    todoList.removeTodo( todoId );
    todoListContainer.removeChild( todoElement );
  }   
});

deleteCompletedTodos.addEventListener( 'click', (e) => {
  const numberOfTodos = todoListContainer.children.length;
  if( numberOfTodos > 0 ) {
    todoList.removeCompletedTodos();

    for( let i = numberOfTodos - 1; i >= 0; i-- ) {
      const todoElement = todoListContainer.children[ i ];
      if( todoElement.classList.value === 'completed' ) {
        todoListContainer.removeChild( todoElement );
      }
    }
  }
});

filterTodoList.addEventListener( 'click', (e) => {
  const filterName = e.target.text;  
  if( !filterName ) return;

  anchorFilters.forEach( filter => filter.classList.remove( 'selected' ) );
  e.target.classList.add( 'selected' );
  
  for( const todo of todoListContainer.children ) {
    todo.classList.remove( 'hidden' );
    const completed = todo.classList.contains( 'completed' );
    
    switch( filterName ) {
      case 'Pendientes':
        if( completed ) todo.classList.add( 'hidden' );
        break;
      case 'Completados':
        if( !completed ) todo.classList.add( 'hidden' );
        break;
    } 
  }
});