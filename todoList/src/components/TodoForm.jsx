import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";


function TodoForm() {
    const { setOpenModal, valueToEdit, editTask} = useContext(TodoContext);

    /*Recibimos como valor inicial el estado del texto de la tarea a editar y este aparezca al momento de abrir el formulario de la tarea a editar*/
    const [newTaskValue, setNewTaskValue] = useState(valueToEdit);

    const onSubmit = (event) => {
        event.preventDefault();
        editTask(valueToEdit,newTaskValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTaskValue(event.target.value);
    };


    return (
        <form onSubmit={onSubmit} className="flex justify-center items-center flex-col w-full max-w-[470px] py-8 px-10 bg-[#32315B] rounded-lg shadow-lg">
            <label className="text-center font-bold text-lg text-white mb-6">Edita tu tarea</label>
            <textarea
                value={newTaskValue}
                onChange={onChange}
                required
                className="bg-[#292850] border-2 border-blue-400 rounded-md shadow-md text-white text-md text-center py-3 px-3 w-full h-[96px] mb-6"
            />

            <div className="flex justify-between w-full">
                <button
                    type="button"
                    className="px-4 py-2 bg-white text-gray-800 text-lg font-medium border border-gray-400 rounded-md hover:bg-gray-200 focus:outline-none focus:border-gray-600"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white text-lg font-medium rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}
export { TodoForm };
