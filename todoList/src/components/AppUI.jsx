import PropTypes from 'prop-types';
import { TodoHeader } from './TodoHeader'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'


function AppUI({
    unCompletedTasks,
    completedTasks,
    addNewTask,
    checkTask,
    deleteTask,
}){
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
                    deleteTask={() => deleteTask(task.text)}
                    completed={false} />
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
AppUI.propTypes = {
    unCompletedTasks: PropTypes.array.isRequired,
    completedTasks: PropTypes.array.isRequired,
    addNewTask: PropTypes.func.isRequired,
    checkTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export {AppUI};