import {useState} from 'react';

export default function Update_List_Object() {

    const [cars, set_cars] = useState([]);
    const [car_year, set_car_year] = useState(new Date().getFullYear());
    const [car_make, set_car_make] = useState("");
    const [car_model, set_car_model] = useState("");

    function add_car() {
        const new_car = {year: car_year, make: car_make, model: car_model};
        set_cars(prev_cars => [...prev_cars, new_car]);

        set_car_year(new Date().getFullYear());
        set_car_make("");
        set_car_model("");
    }

    function remove_car(index) {
        set_cars(prev_cars => prev_cars.filter((_, car_index) => car_index !== index));
    }

    function change_year(e) {
        set_car_year(e.target.value);
    }

    function change_make(e) {
        set_car_make(e.target.value);
    }

    function change_model(e) {
        set_car_model(e.target.value);
    }



    return(<div>
        <h2>List of car objects:</h2>
        <ul>
            {cars.map((car, index) => 
            <li key={index} onClick={() => remove_car(index)}>
                {car.year} {car.make} {car.model}
            </li>)}
        </ul>
        <input type='number' value={car_year} onChange={change_year}/><br/>
        <input type='text' value={car_make} onChange={change_make} placeholder='Enter car make'/><br/>
        <input type='text' value={car_model} onChange={change_model} placeholder='Enter car model'/><br/>
        <button onClick={add_car}>Add car</button>

    </div>)
}