import styles from './Use_Context.module.css'
import Use_Context_2 from './Use_Context_2.jsx'
import { useState, createContext } from 'react'

export const user_context = createContext();

export default function Use_Context_1() {
    const [user, set_user] = useState("John");

    return (<div className={styles.box}>
        <h1>Component 1</h1>
        <h2>{`Hello ${user}`}</h2>

        <user_context.Provider value={user}>
            <Use_Context_2 user={user}/>
        </user_context.Provider>

    </div>)
}