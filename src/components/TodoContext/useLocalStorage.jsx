import { useEffect, useState } from "react";

function useLocalStorage() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const defaultValue = [
        {
            "text": "🏋️ Ir al gimnasio (Entrenar pecho y tríceps)",
            "completed": false
        },
        {
            "text": "📚 Aprender TypeScript - Capítulo 3",
            "completed": false
        },
        {
            "text": "🛒 Hacer compras para la semana",
            "completed": true
        },
        {
            "text": "📝 Actualizar mi portafolio",
            "completed": true
        },
        {
            "text": "🌎 Publicar mi proyecto en Vercel",
            "completed": false
        }
    ];

    useEffect(() => {
        setTimeout(() => {
            try {
                const taskListExists = localStorage.getItem("tasksList");
                if (taskListExists) {
                    const parseTasks = JSON.parse(taskListExists);
                    setTasks(parseTasks);
                    setLoading(false);
                } else {
                    localStorage.setItem("tasksList", JSON.stringify(defaultValue));
                    setTasks(defaultValue);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }, 1000);
    }, []);

    function updateTasks(updatedTask) {
        localStorage.setItem("tasksList", JSON.stringify(updatedTask));
        setTasks(updatedTask);
    }

    return { updateTasks, tasks, loading };
}

export { useLocalStorage };