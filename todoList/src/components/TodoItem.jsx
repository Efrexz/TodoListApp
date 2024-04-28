import { CheckButtonIcon } from "./CheckButtonIcon"
import { DeleteButtonIcon } from "./DeleteButtonIcon"
import { EditIcon } from "./EditIcon"

function TodoItem({text,completed,checkTask, deleteTask}) {

    // function checkTask(){
    //     const checkButton = document.querySelector("#checkButton");
    //     checkButton.classList.toggle('text-green-500');
    //     const svg = checkButton.querySelector('svg');
    //     svg.classList.toggle('hidden');
    // }

    return (
        <li key={text} className={`flex justify-between items-center relative border-1 rounded-md ${completed ? "bg-[#38375F]" : "bg-[#44446A]"}  p-3 my-4`}>
            <div className="flex justify-around gap-3 items-center text-md">
                <button
                    onClick={checkTask}
                    className={`flex items-center justify-center w-6 h-6 rounded-full border ${completed ? "bg-green-200" : "bg-white"} border-gray-400 `}
                >
                    <CheckButtonIcon completed={completed}/>
                </button>
                <p className={completed ? "text-[#6C6C92] line-through" : "text-white"}>{text}</p>
            </div>
            <div className="flex items-center">
                <span className="absolute right-8 hover:cursor-pointer" title="Editar">
                    <EditIcon/>
                </span>
                <span className="absolute right-[-12px] bottom-6 hover:cursor-pointer" title="Eliminar" onClick={deleteTask}>
                    <DeleteButtonIcon/>
                </span>
            </div>
        </li>
    )
}

export { TodoItem }
