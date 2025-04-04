import {useState} from 'react';

export default function Update_Object_State() {

    const [car, set_car] = useState({year: 2024,
        make: "Ford",
        model: "Mustang"});


    function change_year_change(e) {
        // ... is spread operator, it copies the existing properties of the object and then we can change the property we want to change
        set_car(car_prev => ({...car_prev, year: e.target.value}));
    }

    function change_make_change(e) {
        set_car(car_prev => ({...car_prev, make: e.target.value}));
    }


    function change_model_change(e) {
        set_car(car_prev => ({...car_prev, model: e.target.value}));
    }


    return (<div>
        <p>Your favorite car is : {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={change_year_change}/><br/>
        <input type="text" value={car.make} onChange={change_make_change}/><br/>
        <input type="text" value={car.model} onChange={change_model_change}/><br/>
    </div>)


}
    