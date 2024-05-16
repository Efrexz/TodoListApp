import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [openModal,setOpenModal] = useState(false);
    const [valueToEdit, setValueToEdit] = useState(""); /*Valor de la tarea que aparezca al momento de undir en el boton de edit*/
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

    function editTask(text,editedTask){
        const tasksList = [...tasks];
        const taskIndex = tasks.findIndex((task) => task.text === text);
        const newEditedTask = {text: editedTask , completed:false}
        tasksList.splice(taskIndex,1,newEditedTask);
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
            openModal,
            setOpenModal,
            valueToEdit,
            setValueToEdit,
            editTask,
        }}>
            {children}
        </TodoContext.Provider>
    );
};

TodoProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { TodoProvider, TodoContext };