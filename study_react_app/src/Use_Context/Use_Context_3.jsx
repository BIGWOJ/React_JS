import styles from './Use_Context.module.css'
import Use_Context_4 from './Use_Context_4'
import { useContext } from 'react'
import {user_context} from './Use_Context_1.jsx'

export default function Use_Context_3() {

    const user = useContext(user_context);

    return (<div className={styles.box}>
        <h1>Component 3</h1>
        <h2>{`Hello again ${user}`}</h2>
        <Use_Context_4/>
    </div>)
}