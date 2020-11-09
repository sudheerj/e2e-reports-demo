Feature('Delete Todos')

Before(async ({I, TodosPage}) => {
  TodosPage.goto()

  TodosPage.enterInput('Wakeup early')
  TodosPage.enterInput('Go for jogging')
  TodosPage.enterInput('Eat breakfast')
})

Scenario('Delete todos', async ({I, TodosPage}) => {
  I.say('Consider I have some todos')
  I.say('When I delete the last todo')
  TodosPage.deleteTodo(2)

  I.say('Then the todo should disappear from the list')
  TodosPage.seeNumberOfTodos(2)
})