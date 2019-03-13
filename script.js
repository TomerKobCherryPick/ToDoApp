const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let itemCount = 0
let uncheckedItemsCount = 0
let toDos = []

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


function newTodo() {
	itemCount++
	itemCountSpan.innerHTML = itemCount
	const toDo = createToDo()
	toDos.push(toDo)
	list.appendChild(toDo)
}

function createToDo(){
	const li = document.createElement('li')
	li.className = classNames.TODO_ITEM
	
	const text = document.createElement('input')
	text.setAttribute('value', 'TODO')
	text.className = classNames.TODO_TEXT

	const checkBox = document.createElement('input')
	checkBox.className = classNames.TODO_CHECKBOX
	checkBox.type = 'checkBox'
	checkBox.onchange = updateIsChecked

	const deleteButton = document.createElement('button')
	deleteButton.className = classNames.TODO_DELETE
	deleteButton.innerHTML = 'delete'
	deleteButton.onclick = deleteToDo
	deleteButton.referanceToLi = li
	deleteButton.referanceToCheckBox = checkBox

	uncheckedItemsCount++
	uncheckedCountSpan.innerHTML = uncheckedItemsCount
	
	li.appendChild(checkBox)
	li.appendChild(text)
	li.appendChild(deleteButton)
	return li
}
function deleteToDo() {
	itemCount--
	itemCountSpan.innerHTML = itemCount
	if (!this.referanceToCheckBox.checked) {
		uncheckedItemsCount--
		uncheckedCountSpan.innerHTML = uncheckedItemsCount
	}
	toDos = toDos.filter(todo => this.referanceToLi !== todo)
	list.innerHTML = ''
	toDos.forEach(todo => list.appendChild(todo))
	
}
function updateIsChecked(){
	if (this.checked) {
		uncheckedItemsCount--
	} else {
		uncheckedItemsCount++
	}
	uncheckedCountSpan.innerHTML = uncheckedItemsCount
}


