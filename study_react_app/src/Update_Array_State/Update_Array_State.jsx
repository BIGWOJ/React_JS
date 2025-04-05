import {useState} from 'react';

export default function Update_Array_State() {

    const [foods, set_foods] = useState(["Apple", "Banana", "Orange"]);

    function add_food() {
        const new_food = document.getElementById("food_input").value;
        document.getElementById("food_input").value = '';
        set_foods(food_prev => [...food_prev, new_food]);
    }

    function remove_food(index) {
        set_foods(food_prev => food_prev.filter((_, food_index) => food_index !== index));
    }

    return(<div>
        <h2>List of food:</h2>
        <ul>
            {foods.map((food, index) => 
            <li key={index} onClick={() => remove_food(index)}> 
            {food}</li>)}
        </ul>
        <input type="text" id="food_input" placeholder='Enter food name'/>
        <button onClick={add_food}>Add food</button>
    </div>)

}