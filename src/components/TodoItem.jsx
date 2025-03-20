import PropTypes from 'prop-types';
import { CheckButtonIcon } from "./CheckButtonIcon"
import DeleteButtonIcon from "@assets/deleteButton.svg?react"
import { EditIcon } from "./EditIcon"

function TodoItem({ text, completed, checkTask, deleteTask }) {

    return (
        <li key={text} className={`flex justify-between items-center relative border-1 rounded-md ${completed ? "bg-[#38375F]" : "bg-[#44446A]"}  p-3 my-4 `}>
            <div className="flex justify-around gap-3 items-center text-md">
                <button
                    onClick={checkTask}
                    className={`flex items-center justify-center min-w-6 h-6 rounded-full border ${completed ? "bg-green-200" : "bg-white"} border-gray-400 `}
                >
                    <CheckButtonIcon completed={completed} />
                </button>
                <p className={`${completed ? "text-[#6C6C92] line-through" : "text-white"} break-words`}>{text}</p>
            </div>
            <div className="flex items-center">
                {/*Si la tarea esta completa no se agrega el boton de editar */
                    !completed &&
                    <button className="hover:cursor-pointer pr-4" title="Editar">
                        <EditIcon text={text} />
                    </button>
                }
                <button className="absolute right-[-12px] top-[-14px] hover:cursor-pointer" title="Eliminar" onClick={deleteTask}>
                    <DeleteButtonIcon />
                </button>
            </div>
        </li>
    )
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    checkTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export { TodoItem }
