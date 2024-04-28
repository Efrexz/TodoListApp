import { TodoHeader } from './components/TodoHeader'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { useEffect, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskListExists = localStorage.getItem("tasksList");
    if(taskListExists){
      const parseTasks = JSON.parse(taskListExists);
      setTasks(parseTasks);
    }else{
      localStorage.setItem("tasksList", JSON.stringify([]));
    }
  }, [])


  function addNewTask(newTask){
    const tasksList = [...tasks];
    const taskAlreadyAdded = tasksList.find((task) => task.text === newTask);
    if(!taskAlreadyAdded){
      tasksList.push(
        {text: newTask, completed:false}
      );
      localStorage.setItem("tasksList", JSON.stringify(tasksList));
      setTasks(tasksList);
    }
  }

  function checkTask(text){
    const tasksList = [...tasks];
    const taskIndex = tasks.findIndex((task) => task.text === text);
    tasksList[taskIndex].completed = !tasksList[taskIndex].completed;
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
    setTasks(tasksList);
  }

  function deleteTask(text){
    const tasksList = [...tasks];
    const taskIndex = tasks.findIndex((task) => task.text === text);
    tasksList.splice(taskIndex,1);
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
    setTasks(tasksList);
  }

  const unCompletedTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <main className='w-full h-full px-6'>
      <TodoHeader />
      <TodoSearch addNewTask={addNewTask}/>

      <TodoList>
        <h3 className='text-[#6B6D93] font-bold'>Pendientes</h3>
        {unCompletedTasks.map((task) => {
          return (
            <TodoItem
              key={task.text}
              text={task.text}
              checkTask={() => checkTask(task.text)}
              deleteTask={() => deleteTask(task.text)} />
          )
        })}
      </TodoList>

      <TodoList>
        <h3 className='text-[#6B6D93] font-bold'>Completadas</h3>
        {completedTasks.map((task) => {
          return (
            <TodoItem
              key={task.text}
              text={task.text}
              checkTask={() => checkTask(task.text)}
              deleteTask={() => deleteTask(task.text)}
              completed />
          )
        })}
      </TodoList>
    </main>
  )
}

export default App
