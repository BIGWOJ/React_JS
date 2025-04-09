import styles from "./Stopwatch.module.css";

import { useState, useEffect, useRef } from "react";


export default function Stopwatch() {
    const [is_running, set_is_running] = useState(false);
    const [elapsed_time, set_elapsed_time] = useState(0);
    const interval_id_ref = useRef(null);
    const start_time_ref = useRef(0);

    useEffect(() => {
        if (is_running) {
            interval_id_ref.current = setInterval(() => {
                set_elapsed_time(Date.now() - start_time_ref.current);
            }, 10);
        }

        return () => {
            clearInterval(interval_id_ref.current);
        };

    }, [is_running]);

    function start() {
        set_is_running(true);
        start_time_ref.current = Date.now() - elapsed_time;
    }

    function stop() {
        set_is_running(false);
    }

    function reset() {
        set_elapsed_time(0);
        set_is_running(false);
    }

    function format_time() {
        let hours = Math.floor(elapsed_time /(1000 * 60 * 60));
        let minutes = Math.floor(elapsed_time / (1000 * 60)) % 60;
        let seconds = Math.floor(elapsed_time / 1000) % 60;
        let milliseconds = Math.floor((elapsed_time % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`; 
    }

    return (<div className={styles.stopwatch}>
        <div className={styles.display}>{format_time()}</div>
        <div className={styles.buttons}> 
            <button onClick={start} className={styles.start_button}>Start</button>    
            <button onClick={stop} className={styles.stop_button}>Stop</button>    
            <button onClick={reset} className={styles.reset_button}>Reset</button>    
        </div> 
    </div>
    )
}