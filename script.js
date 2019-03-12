const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let itemCount = 0

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
	itemCount++
	itemCountSpan.innerHTML = itemCount

	//alert(itemCountSpan.innerHTML)
  //alert('New TODO button clicked!')
}

function createToDo(){
	const checkBox = document.createElement()
}


