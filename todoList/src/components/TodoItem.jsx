function TodoItem(props) {
    return (
        <li className="flex justify-between items-center relative border-1 rounded-md bg-[#44446A]">
            <div className="flex justify-around">
            <span>V</span>
            <p>{props.text}</p>
            </div>
            <span>X</span>
        </li>
    )
}

export { TodoItem }
