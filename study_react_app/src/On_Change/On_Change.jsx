import React, { useState } from 'react';

export default function On_Change() {

    const [name, set_name] = useState("");
    const [quantity, set_quantity] = useState(1);
    const [comment, set_comment] = useState("");
    const [payment, set_payment] = useState("");
    const [shipping, set_shipping] = useState("");

    function name_change(e) {
        set_name(e.target.value);
    }

    function quantity_change(e) {
        set_quantity(e.target.value);
    }

    function comment_change(e) {
        set_comment(e.target.value);
    }

    function payment_change(e) {
        set_payment(e.target.value);
    }

    function shipping_change(e) {
        set_shipping(e.target.value);
    }

    return (
        <>
            <div>
                <input value={name} onChange={name_change}></input>
                <p>Name: {name}</p>

                <input value={quantity} onChange={quantity_change} type="number"/>
                <p>Quantity: {quantity}</p>

                <input value={comment} onChange={comment_change} placeholder="Write delivery guidance..." type="text"/>
                <p>Comment {comment}</p>

                <select value={payment} onChange={payment_change}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p>

                {/* Added checked statement to ensure only 1 radio is checked */}
                <label>
                    <input type='radio' value='Pick up' checked={shipping ==="Pick up"} onChange={shipping_change}/>
                    Pick up
                </label>

                <label>
                    <input type='radio' value='Home delivery' checked={shipping ==="Home delivery"} onChange={shipping_change}/>
                    Home delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>
        </>
    )
}