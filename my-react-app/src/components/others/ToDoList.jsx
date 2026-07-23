/*

import { useState } from "react";

export function ToDoList(){
    
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const index = 0;

    const addTask = () => {
        //Se non e' vuoto
        if (task) {
            //... copia tutti gli elementi di tasks
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter(
            (_, i) => i !== index));
    };
    
    return (
        <div>
            <h1 class="text-3xl font-bold underline"> To-Do-List </h1>
            <input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Aggiungi una task...' />
            <button onClick={addTask} id="addTaskButton"
            class="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ..."
            >Aggiungi</button>

            <ul>
                {
                    //The map() method is commonly used in React to render lists of elements
                    tasks.map((t, index) => (
                        <li key={index}>
                            {t} <button onClick={() => removeTask(index)}>❌</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
    
*/