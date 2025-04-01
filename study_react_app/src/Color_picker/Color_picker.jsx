import styles from './Color_picker.module.css';
import { useState } from 'react';

export default function Color_picker() {

    const [color, set_color] = useState("#FFFFFF");

    function change_color(e) {
        set_color(e.target.value);
    }

    return (
        <div className={styles.color_picker_container}>
            <h1>Color Picker</h1>
            <div className={styles.color_display} style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={change_color} />
        </div>

    )
}