import List from "./List/List.jsx";
import Student from "./Student/Student.jsx"
import Buttons from "./Buttons/Buttons.jsx";
import Use_State from "./Use_State/Use_State.jsx";
import Counter from "./Counter/Counter.jsx";
import On_Change from "./On_Change/On_Change.jsx";
import Color_picker from "./Color_picker/Color_picker.jsx";
import Update_Object_State from "./Update_Object_State/Update_Object_State.jsx";

export default function App() {
    // const fruits = [
    //     {id:1, name: "Apple", calories: 95}, 
    //     {id:2, name: "Banana", calories: 105} ,
    //     {id:3, name: "Grapes", calories: 35},
    //     {id:4, name: "Coconut", calories: 180},
    //     {id:5, name: "Pineapple", calories: 40},
    // ];

    // const vegetables = [
    //     {id:1, name: "potatoes", calories: 150}, 
    //     {id:2, name: "celery", calories: 20} ,
    //     {id:3, name: "carrots", calories: 30},
    //     {id:4, name: "corn", calories: 60},
    //     {id:5, name: "broccoli", calories: 50},
    // ];

    return (
        <>
            {/* <Buttons/> */}
            {/* <Student age={20}/> */}
            {/* <Student/> */}
            {/* <List category="fruits"/> */}
            {/* <List items={fruits}/> */}
            {/* <List items={fruits} category="fruits"/> */}
            {/* <List items={vegetables} category="vegetables"/> */}
            {/* <Use_State/> */}
            {/* <Counter/> */}
            {/* <On_Change/> */}
            {/* <Color_picker/> */}
            <Update_Object_State/>

        </>
    );

}