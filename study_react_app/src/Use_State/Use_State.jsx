// {} is used to only import named exports
import React, { useState } from 'react';

export default function Use_State() {
    const [name, set_name] = useState("Guest");
    const [age, set_age] = useState(0);
    const [is_employed, set_is_employed] = useState(false);

    const update_name = () => {
        name === "Spongebob" ? set_name("Patrick") : set_name("Spongebob");
    }

    const increment_age = () => {
        set_age(age+1);
    }

    const toggle_employment = () => {
        set_is_employed(!is_employed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={update_name}> Toggle name</button>

            <p>Age: {age}</p>
            <button onClick={increment_age}> Increment age</button>

            <p>Employed: {is_employed ? "Yes" : "No"}</p>
            <button onClick={toggle_employment}>Toggle status</button>

        </div>
    )

}