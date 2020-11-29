const assert = require('assert')

const { I } = inject();
const findEditedTodoButton = index => locate('button').first().inside(`.list-group li:nth-child(${index})`)
const findEditedTodoItem = index => locate('form > input').inside(`.list-group li:nth-child(${index})`)
const findTodoDeleteButton = index => locate('button').last().inside(`.list-group li:nth-child(${index})`)

module.exports = {
  goto() {
    I.amOnPage('http://127.0.0.1:8081')
  },

  enterInput(todo) {
    I.fillField('.new-todo', todo)
    I.pressKey('Enter')
  },

  editTodo(index, newTodoText) {
    I.click(findEditedTodoButton(index))
    I.fillField(findEditedTodoItem(index), newTodoText)
    I.pressKey('Enter')
  },

  deleteTodo(index) {
    I.hover(`.list-group li:nth-child(${index})`)
    I.click(findTodoDeleteButton(index))
  },
  seeNumberOfTodos(numberOfTodos) {
    I.seeNumberOfVisibleElements('.list-group li', numberOfTodos)
  },
  async verifyTodoEquals(index, todo) {
    let todos = await I.grabTextFrom('.list-group li')
    if (typeof todos === 'string') {
      todos = [todos]
    }

    assert(todos[index - 1] === todo, `Expected "${todo}" but got "${todos[index - 1]}"`)
    return todos
  },

}
