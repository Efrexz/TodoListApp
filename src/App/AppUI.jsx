import { useContext } from 'react';
import { TodoHeader } from '@components/TodoHeader'
import { TodoSearch } from '@components/TodoSearch'
import { TodoList } from '@components/TodoList'
import { TodoItem } from '@components/TodoItem'
import { LoadingItem } from '@components/LoadingItem';
import { TodoContext } from '@components/TodoContext';
import { Modal } from '@components/Modal';
import { TodoForm } from '@components/TodoForm';
import ClipBoardIcon from '@assets/clipBoard.svg?react';
import EmptyCliboardIcon from '@assets/emptyClipboard.svg?react';


function AppUI() {
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
            <TodoSearch />

            <TodoList>
                <h3 className='text-[#6B6D93] font-bold mb-6'>Pendientes</h3>
                {loading ? (
                    <div>
                        <LoadingItem />
                        <LoadingItem />
                        <LoadingItem />
                    </div>
                ) : unCompletedTasks.length === 0 ? (
                    <div className='flex flex-col items-center justify-center'>
                        <div className="w-16 h-16 mb-6 rounded-full bg-gray-500 flex items-center justify-center">
                            <ClipBoardIcon className="w-10 h-10 text-white" />
                        </div>

                        <h3 className="text-xl font-semibold mb-2 text-gray-400">Añade tu primera tarea</h3>
                        <p className=" mb-6 text-gray-400">
                            Aún no tienes tareas pendientes. ¡Crea una nueva ahora! 🚀
                        </p>
                    </div>
                ) : (
                    unCompletedTasks.map((task) => (
                        <TodoItem
                            key={task.text}
                            text={task.text}
                            checkTask={() => checkTask(task.text)}
                            deleteTask={() => deleteTask(task.text)}
                            completed={false}
                        />
                    ))
                )}
            </TodoList>

            <TodoList>
                <h3 className='text-[#6B6D93] font-bold mb-6'>Completadas</h3>
                {loading ? (
                    <div>
                        <LoadingItem />
                        <LoadingItem />
                        <LoadingItem />
                    </div>
                ) : completedTasks.length === 0 ? (
                    <div className='flex flex-col items-center justify-center'>
                        <div className="w-16 h-16 mb-6 rounded-full bg-gray-500 flex items-center justify-center">
                            <EmptyCliboardIcon className="w-10 h-10 text-white" />
                        </div>
                        <p className=" mb-6 text-gray-400">
                            Aún no has completado ninguna tarea.
                        </p>
                    </div>
                ) : (
                    completedTasks.map((task) => (
                        <TodoItem
                            key={task.text}
                            text={task.text}
                            checkTask={() => checkTask(task.text)}
                            deleteTask={() => deleteTask(task.text)}
                            completed
                        />
                    ))
                )}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </main>
    );
}
export { AppUI };