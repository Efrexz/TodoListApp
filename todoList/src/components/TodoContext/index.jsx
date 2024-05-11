import PropTypes from 'prop-types';
import { createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const {
        tasks,
        updateTasks,
        loading
    } = useLocalStorage();


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
        <TodoContext.Provider value={{
            loading,
            unCompletedTasks,
            completedTasks,
            addNewTask,
            checkTask,
            deleteTask,
        }}>
            {children}
        </TodoContext.Provider>
    );
};

TodoProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { TodoProvider, TodoContext };