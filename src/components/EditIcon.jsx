import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TodoContext } from './TodoContext';

function EditIcon({text}){
    /*Recibimos como prop el text de la tarea que enviamos al generar nuestro componente con el .map en TodoItem y poder identificar cual tarea editaremos */
    const {setValueToEdit,setOpenModal} = useContext(TodoContext);
    /*recibimos de nuestro contexto global el modificador de estado del valor a editar para poder añadirle la prop text y este valor aparezca en el textarea para poder editar la tarea */

    function openEditModal(){
        setOpenModal(true);
        setValueToEdit(text)
    }
    /*Creamos la funcion que se ejecutara al momento de hacer click en el icono de editar y este le añade el valor de la tarea al estado de valueToEdit que esta en nuestro globalContext y poder enviar este mismo al TodoForm como valor inicial y luego poder modificar  */

    return(
        <span onClick={openEditModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil-minus" width="34" height="34" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#16a34a" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                <path d="M13.5 6.5l4 4" />
                <path d="M16 19h6" />
            </svg>
        </span>
    )
}

EditIcon.propTypes = {
    text: PropTypes.string.isRequired
};

export {EditIcon};