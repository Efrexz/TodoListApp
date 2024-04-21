import { TodoHeader } from './components/TodoHeader'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

function App() {
  return (
    <main className='w-full h-full px-6'>
      <TodoHeader />
      <TodoSearch />

      <TodoList>
        <TodoItem text="limpiar el cuarto" />
        <TodoItem text="Hacer memorandum" />
      </TodoList>
      <CreateTodoButton />
    </main>
  )
}

export default App
