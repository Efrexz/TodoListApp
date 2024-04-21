function TodoHeader(){
    return (
        <>
            <nav className="flex justify-between pt-4 pb-6 items-center">
                <span className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list" width="48" height="46" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 6l11 0" />
                    <path d="M9 12l11 0" />
                    <path d="M9 18l11 0" />
                    <path d="M5 6l0 .01" />
                    <path d="M5 12l0 .01" />
                    <path d="M5 18l0 .01" />
                    </svg>
                </span>
                <span className="text-xl flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-record-filled" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M8 5.072a8 8 0 1 1 -3.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 3.995 -6.643z" strokeWidth="0" fill="#f59e0b" />
                    </svg>
                    <p className="font-bold text-[#9e9e9e] opacity-50">Tareas</p>
                </span>
            </nav>
        </>
    )
}

export {TodoHeader};