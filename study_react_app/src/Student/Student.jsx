import styles from "./Student.module.css";

// Default parameters in function
export default function Student({name = "Guest", age = 0, isStudent = false}){

    return(
        <div className={styles.student}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

