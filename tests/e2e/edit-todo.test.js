
Feature('Edit Todos')

Before(async ({I, TodosPage}) => {
  TodosPage.goto()

  TodosPage.enterInput('Wakeup early')
  TodosPage.enterInput('Go for jogging')
  TodosPage.enterInput('Eat breakfast')
})

Scenario('Save edited todo on blur', async ({I, TodosPage}) => {
  I.say('Consider I have some existing todos')

  I.say('When I edit the second todo')
  await TodosPage.editTodo(1, 'Go to college')

  I.say('Then I see that the todo text has been changed')
  await TodosPage.verifyTodoEquals(1, 'Go to college')

  I.saveScreenshot('saved-edited-todo-on-blur.png')
})