import MenuIcon from "@assets/menu.svg?react"
import CircleIcon from "@assets/circle.svg?react"

function TodoHeader() {
    return (
        <>
            <nav className="flex justify-between pt-4 pb-6 items-center">
                <span className="opacity-50">
                    <MenuIcon />
                </span>
                <span className="text-xl flex items-center gap-1">
                    <CircleIcon />
                    <span className="font-bold text-[#9e9e9e] opacity-50 text-2xl">Tareas</span>
                </span>
            </nav>
        </>
    )
}

export { TodoHeader };