function TodoItem({text,completed}) {

    function checkTask(){
        const checkButton = document.querySelector("#checkButton");
        checkButton.classList.toggle('text-green-500');
        const svg = checkButton.querySelector('svg');
        svg.classList.toggle('hidden');
    }

    return (
        <li className={`flex justify-between items-center relative border-1 rounded-md ${completed ? "bg-[#38375F]" : "bg-[#44446A]"}  p-3 my-4`}>
            <div className="flex justify-around gap-3 items-center text-md">
                <button
                    id="checkButton"
                    onClick={checkTask}
                    className={`flex items-center justify-center w-6 h-6 rounded-full border ${completed ? "bg-green-200" : "bg-white"} border-gray-400 `}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${completed ? "block fill-green-500" : "hidden"}`} viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                        </svg>
                </button>
                <p className={completed ? "text-[#6C6C92] line-through" : "text-white"}>{text}</p>
            </div>
            <span>X</span>
        </li>
    )
}

export { TodoItem }
