import styles from './Use_Context.module.css'
import { useContext } from 'react'
import {user_context} from './Use_Context_1.jsx'

export default function Use_Context_4() {
    const user = useContext(user_context);

    return (<div className={styles.box}>
        <h1>Component 4</h1>
        <h2>{`Bye ${user}`}</h2>
    </div>)
}