// Creating TODO in the HTML
export const createTodoInHtml = ( todo ) => {
  const codeToInsertInHtml = `
    <li class="${ (todo.completed) ? 'completed' : ''}" data-id="${ todo.id }">
      <div class="view">
        <input class="toggle" type="checkbox" ${ ( todo.completed ) ? 'checked' : ''}>
        <label>${ todo.task }</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li>
  `;

  const todoListUlContainer = document.querySelector( '.todo-list' ),
    todoListItem = document.createElement( 'div' );
    
  todoListItem.innerHTML = codeToInsertInHtml;  
  todoListUlContainer.append( todoListItem.firstElementChild );
  return todoListItem.firstElementChild;
};