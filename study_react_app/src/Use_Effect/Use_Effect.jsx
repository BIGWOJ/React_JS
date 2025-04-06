import {useState, useEffect} from 'react';

// useEffect(() => {})           Runs after every re-render
// useEffect(() => {}, [])       Runs only on mount
// useEffect(() => {}, [value])  Runs on mount + when value changes
// [] - dependency array

export default function Use_Effect() {
    const [width, set_width] = useState(window.innerWidth);
    const [height, set_height] = useState(window.innerHeight);

    function change_size() {
        set_width(window.innerWidth);
        set_height(window.innerHeight);
    }

    // It works but funciton will be called every time the component is re-rendered, causing in enormous amount of creating event listeners 
    // window.addEventListener('resize', change_size);

    // So better option is to use useEffect, which will only run when the component is mounted (first rendered), so eventListener will be created only once
    useEffect(() => {
        window.addEventListener('resize', change_size);

        // Return function will be called when the component is unmounted (removed from the DOM), using for cleaning up during unmounting
        return () => {
            window.removeEventListener('resize', change_size);
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}px`;
    }, [width, height])


    // const [count, set_count] = useState(0);
    // const [color, set_color] = useState("white");

    // function add_count() {
    //     set_count(prev_count => prev_count + 1);
    // }

    // function subtract_count() {
    //     set_count(prev_count => prev_count - 1);
    // }

    // function change_color() {
    //     set_color(prev_color => prev_color === "white" ? "red" : "white");
    // }

    // Changes the document title every time count changes
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // })

    // Changes the document title only when count OR colors changes, preventing unnecessary changing during unintentionally re-renders 
    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`;
    // }, [count, color])

    // Changes the document title only on mount (when the component is first rendered)
    // useEffect(() => {
    //     document.title = 'Counter';
    // }, [])

    return (
        <>
            {/* <p style={{color: color}}>Count: {count}</p>
            <button onClick={add_count}>Add</button>
            <button onClick={subtract_count}>Subtract</button><br/><br/>
            <button onClick={change_color}>Change color</button> */}


            <p>Window width: {width}px</p>
            <p>Height width: {height}px</p>
        </>

    )
}