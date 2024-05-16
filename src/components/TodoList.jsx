import PropTypes from 'prop-types';

function TodoList({children}) {
    return (
        <ul className="mt-4 pt-4 border-t-2 border-[#b7b7b7] border-opacity-25">
            {children}
        </ul>
    )
}

TodoList.propTypes = {
    children: PropTypes.node.isRequired,
};

export { TodoList }
