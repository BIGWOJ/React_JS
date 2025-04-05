import {useState} from 'react';
import styles from './To_Do_List.module.css';

export default function To_Do_List() {

    const [tasks, set_tasks] = useState([])
    const [new_task, set_new_task] = useState()

    function input_change(e) {
        set_new_task(e.target.value);
    }

    function add_task(){
        if (new_task.trim() !== ''){
            set_tasks(prev_tasks => [...prev_tasks, new_task]);
            set_new_task('');
        }
    }

    function delete_task(id){
        const updated_tasks = tasks.filter((_, task_index) => task_index !== id);
        set_tasks(updated_tasks);
    }

    function move_task_up(id){
        if (id > 0){
            const updated_tasks = [...tasks];
            [updated_tasks[id], updated_tasks[id - 1]] = [updated_tasks[id - 1], updated_tasks[id]];
            set_tasks(updated_tasks);
        }
    }

    function move_task_down(id){
        if (id < tasks.length - 1){
            const updated_tasks = [...tasks];
            [updated_tasks[id], updated_tasks[id + 1]] = [updated_tasks[id + 1], updated_tasks[id]];
            set_tasks(updated_tasks);
        }
    }


    return (<div className={styles.to_do_list}>
        <h1>To-Do-List</h1>
        <div>
            <input type='text' placeholder='Enter a task...' value={new_task} onChange={input_change}/>
            <button className={styles.add_button} onClick={add_task}>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className={styles.text}>{task}</span> 
                <button className={styles.delete_button} onClick={() => delete_task(index)}>Delete</button>   
                <button className={styles.move_button} onClick={() => move_task_up(index)}>Move up</button> 
                <button className={styles.move_button} onClick={() => move_task_down(index)}>Move down</button> 
            </li>)}
        </ol>

    </div>);
}