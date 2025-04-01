export default function Buttons() {
    const handle_click = () => console.log("Button clicked!");   


    const handle_click_2 = (name) => {
        console.log(`Hello ${name}`)
    }

    let count = 0;
    const handle_click_3 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} clicked ${count} times`)
        }
        else {
            console.log(`${name} stop clicking!`)
        }
    }

    // e is the event object, which contains information about the event that occurred
    const handle_click_4 = (e) => {
        e.target.textContent = e.target.textContent === "Clicked!" ? "Button 4" : "Clicked!";
    }

    return(
        <>
            <button onClick={handle_click}>Button</button>

            <button onClick={() => handle_click_2("Wojtek")}>Button 2</button>

            <button onClick={() => handle_click_3("Wojtek")}>Button 3</button>

            <button onDoubleClick={(e) => handle_click_4(e)}>Button 4</button>
        </>
    )
}