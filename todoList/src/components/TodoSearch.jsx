import { useState } from "react";

function TodoSearch(props) {
    const [todo, setTodo] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        try {
            localStorage.setItem('userName', todo);
        } catch (error) {
            console.error(error.message);
        }
        };

    const onChange = (event) => {
        setTodo(event.target.value);
    };
    return (
        <form className="relative mb-6">
            <input
                id="buscador"
                className="w-full rounded-full border text-md p-4 bg-[#292850] border-none"
                type="search"
                placeholder="Buscar Tarea ..."
                value={todo}
                onChange={onChange}
            />
            <button
                className="flex items-center justify-center absolute right-4 top-2.5 text-4xl font-bold bg-[#3A7EB2] text-white rounded-full w-9 h-9 pb-1 shadow-md"
                onClick={onSubmit}
            >+</button>
        </form>
    )
}

export { TodoSearch }
