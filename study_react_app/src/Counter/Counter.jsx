import React, {useState} from 'react';
import styles from './Counter.module.css';

export default function Counter() {
    const [count, set_count] = useState(0);

    const increment = () => {
        // Using updater function to ensure the latest state is used, without it won't work as expected
        // If would be like this:
        // set_count(count + 1);
        // set_count(count + 1);
        // set_count(count + 1);
        // The output will be 1 instead of 3, because the state is not updated immediately after adding

        // Using updater function is good practise even if updating only once, for better future changes
        set_count(prev_count => prev_count+1);
        set_count(prev_count => prev_count+1);
        set_count(prev_count => prev_count+1);
    }

    const decrement = () => {
        set_count(prev_count => prev_count-1);
        set_count(prev_count => prev_count-1);
        set_count(prev_count => prev_count-1);
    }

    const reset = () => {
        set_count(0);
    }

    return (
        <div className={styles.counter_container}>
            <p className={styles.count_display}>{count}</p>
            <button className={styles.counter_button} onClick={increment}>Increment</button>
            <button className={styles.counter_button} onClick={reset}>Reset</button>
            <button className={styles.counter_button} onClick={decrement}>Decrement</button>
        </div>
    )
}