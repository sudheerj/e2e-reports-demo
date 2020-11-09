Feature('Create Todos')

Before(async ({I, TodosPage}) => {
  TodosPage.goto()
})

Scenario('Create a new todo', async ({I, TodosPage}) => {
  I.say('Consider I have an empty todo list')

  I.say('If I create new todo')
  TodosPage.enterInput('Wakeup early')

  I.say('Then I see the new todo on my list')
  TodosPage.seeNumberOfTodos(1)

  I.saveScreenshot('create-todo.png')
})

Scenario('Create multiple todos', async ({I, TodosPage}) => {
  I.say('Consider I have an empty todo list')

  I.say('If I create multiple todos')
  TodosPage.enterInput('Wakeup early')
  TodosPage.enterInput('Go for jogging')
  TodosPage.enterInput('Eat breakfast')

  I.say('Then I have three todos on my list')
  TodosPage.seeNumberOfTodos(3)

  I.saveScreenshot('create-multiple-todos.png')
})