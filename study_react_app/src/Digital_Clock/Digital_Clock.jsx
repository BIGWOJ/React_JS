import styles from './Digital_Clock.module.css';
import React, { useState, useEffect } from 'react';

export default function Digital_Clock() {

    const [time, set_time] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval_id = setInterval(() => {
            set_time(new Date())
        }, 1000);

        return () => {
            clearInterval(interval_id);
        }
    }, []);

    function format_time() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = hours >= 12 ? 'PM' : 'AM';

        // // Returning 12 when left site is 0 (Falsey) so OR operator is used
        hours = hours % 12 || 12;

        return `${add_zero(hours)}:${add_zero(minutes)}:${add_zero(seconds)} ${meridiem}`;
    }

    function add_zero(num) {
        return num < 10 ? `0${num}` : num;
    }

    return (
        <div className={styles.clock_container}>
            <div className={styles.clock}>
                <span>{format_time()}</span>
            </div>
        </div>
    )

}