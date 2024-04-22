import { TodoHeader } from './components/TodoHeader'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'

function App() {
  return (
    <main className='w-full h-full px-6'>
      <TodoHeader />
      <TodoSearch />

      <TodoList>
        <h3 className='text-[#6B6D93] font-bold'>Pendientes</h3>
        <TodoItem text="limpiar el cuarto" />
        <TodoItem text="Hacer memorandum" />
      </TodoList>

      <TodoList>
        <h3 className='text-[#6B6D93] font-bold'>Completadas</h3>
        <TodoItem text="limpiar el cuarto" completed />
        <TodoItem text="Hacer memorandum" completed />
      </TodoList>
    </main>
  )
}

export default App
