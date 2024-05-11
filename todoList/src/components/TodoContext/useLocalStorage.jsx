import { useEffect, useState } from "react";

function useLocalStorage(){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            try {
                const taskListExists = localStorage.getItem("tasksList");
                if (taskListExists) {
                    const parseTasks = JSON.parse(taskListExists);
                    setTasks(parseTasks);
                    setLoading(false);
                } else {
                    localStorage.setItem("tasksList", JSON.stringify([]));
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }, 1000);
    }, []);

    function updateTasks(updatedTask){
        localStorage.setItem("tasksList", JSON.stringify(updatedTask));
        setTasks(updatedTask);
    }

    return {updateTasks, tasks, loading};
}

export { useLocalStorage };