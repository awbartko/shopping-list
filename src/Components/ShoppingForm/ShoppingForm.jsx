import React, { useState } from 'react';
import './ShoppingForm.css';

export default function ShoppingForm({ addItem }) {

    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(0);

    function handleItemChange(event) {
        setItem(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        addItem(item, quantity);
    }

    return (
        <form className="shopping-form-container" action="#" method="POST" onSubmit={handleSubmit}>
            <label className="shopping-form-item" htmlFor="item">Item:</label>
            <input
                type="text"
                required
                id="item"
                name="item"
                value={item}
                onChange={handleItemChange} />
                <label className="shopping-form-item" htmlFor="quantity">Quantity:</label>
                <input 
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    required
                    min="0"
                    onChange={handleQuantityChange} />
                <button className="add-button" type="submit">Add to Cart</button>
        </form>
    );
}
