import { useRef, useState, useEffect, use } from 'react';
import { user_context } from '../Use_Context/Use_Context_1';

// useRef does not cause re-rendering of the component when the value changes,
// useState does.

// useRef is used to access DOM elements directly, while useState is used to manage state in functional components.
export default function Use_Ref() {

    let [number, set_number] = useState(0);
    const ref = useRef(0);
    const input_ref_1 = useRef(null);
    const input_ref_2 = useRef(null);
    const input_ref_3 = useRef(null);

    useEffect(() => {
        console.log("Component rendered");
    });

    function click_function_1() {
        input_ref_1.current.focus();
        input_ref_1.current.style.backgroundColor = "yellow";
        input_ref_2.current.style.backgroundColor = "";
        input_ref_3.current.style.backgroundColor = "";
    }

    function click_function_2() {
        input_ref_2.current.focus();
        input_ref_1.current.style.backgroundColor = "";
        input_ref_2.current.style.backgroundColor = "red";
        input_ref_3.current.style.backgroundColor = "";
    }

    function click_function_3() {
        input_ref_3.current.focus();
        input_ref_1.current.style.backgroundColor = "";
        input_ref_2.current.style.backgroundColor = "";
        input_ref_3.current.style.backgroundColor = "blue";
    }
    
    return (<div>
        <button onClick={click_function_1}>
        Click me 1!
        </button>
        <input ref={input_ref_1}/>

        <button onClick={click_function_2}>
        Click me 2!
        </button>
        <input ref={input_ref_2}/>

        <button onClick={click_function_3}>
        Click me 3!
        </button>
        <input ref={input_ref_3}/>
    </div>)
}