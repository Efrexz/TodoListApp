
import { useEffect, useState } from 'react'
import { AppUI } from './components/AppUI';

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

    function updateTasks(updatedTask){
      localStorage.setItem("tasksList", JSON.stringify(updatedTask));
      setTasks(updatedTask);
    }

  function addNewTask(newTask){
    const tasksList = [...tasks];
    const taskAlreadyAdded = tasksList.find((task) => task.text === newTask);
    if(!taskAlreadyAdded){
      tasksList.push(
        {text: newTask, completed:false}
      );
      updateTasks(tasksList);
    }
  }

  function checkTask(text){
    const tasksList = [...tasks];
    const taskIndex = tasks.findIndex((task) => task.text === text);
    tasksList[taskIndex].completed = !tasksList[taskIndex].completed;
    updateTasks(tasksList);
  }

  function deleteTask(text){
    const tasksList = [...tasks];
    const taskIndex = tasks.findIndex((task) => task.text === text);
    tasksList.splice(taskIndex,1);
    updateTasks(tasksList);
  }

  const unCompletedTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <AppUI
      unCompletedTasks ={unCompletedTasks}
      completedTasks={completedTasks}
      addNewTask={addNewTask}
      checkTask={checkTask}
      deleteTask={deleteTask}
    />
  )
}

export default App
