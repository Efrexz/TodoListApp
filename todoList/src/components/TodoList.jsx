function TodoList(props) {
    return (
        <ul className="mt-4 pt-4 border-t-2 border-[#b7b7b7] border-opacity-25">
            {props.children}
        </ul>
    )
}

export { TodoList }
