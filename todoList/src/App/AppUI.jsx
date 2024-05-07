import PropTypes from 'prop-types';
import { TodoHeader } from '../components/TodoHeader'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { LoadingItem } from '../components/LoadingItem';


function AppUI({
    loading,
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
                {loading && <div>
                    <LoadingItem/>
                    <LoadingItem/>
                    <LoadingItem/>
                </div>}
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
                {loading &&
                    <div>
                        <LoadingItem/>
                        <LoadingItem/>
                        <LoadingItem/>
                    </div>}
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
    loading: PropTypes.bool.isRequired,
    unCompletedTasks: PropTypes.array.isRequired,
    completedTasks: PropTypes.array.isRequired,
    addNewTask: PropTypes.func.isRequired,
    checkTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export {AppUI};