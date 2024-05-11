import { useContext, useState } from "react";
import { TodoContext } from './TodoContext';

function TodoSearch() {
    const {addNewTask} = useContext(TodoContext);
    const [todo, setTodo] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        if(todo.length >= 3){
            addNewTask(todo);
        }
    }

    const onChange = (event) => {
        setTodo(event.target.value);
    };
    return (
        <form className="relative mb-6">
            <input
                id="buscador"
                className="w-full rounded-full border text-md p-4 bg-[#292850] border-none outline-none outline-blue-400"
                type="search"
                placeholder="Agregar tarea ..."
                value={todo}
                onChange={onChange}
            />
            <button
                className="flex items-center justify-center absolute right-4 top-2.5 text-4xl font-bold bg-[#3A7EB2] text-white rounded-full w-9 h-9 pb-2 shadow-md transition-colors"
                title="Agregar"
                onClick={onSubmit}
            >+</button>
        </form>
    )
}

export { TodoSearch }
