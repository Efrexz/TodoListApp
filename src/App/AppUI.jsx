import { useContext } from 'react';
import { TodoHeader } from '../components/TodoHeader'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { LoadingItem } from '../components/LoadingItem';
import { TodoContext } from '../components/TodoContext';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';


function AppUI(){
    const {
        loading,
        unCompletedTasks,
        completedTasks,
        checkTask,
        deleteTask,
        openModal,
    } = useContext(TodoContext);

    return (
        <main className='w-full h-full px-6'>
            <TodoHeader />
            <TodoSearch/>

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

            {openModal &&
                <Modal>
                    <TodoForm/>
                </Modal>
            }
        </main>
    )
}
export {AppUI};