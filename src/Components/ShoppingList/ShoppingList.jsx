import React from 'react';
import './ShoppingList.css';

function ShoppingItem({ id, item, quantity, deleteItem }) {

    function handleDelete(event) {
        event.preventDefault();
        deleteItem(id);
    }

    return (
        <li className="shopping-item-container">
            <span>{item} ({quantity})</span>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default function ShoppingList({ items, deleteItem }) {

    const ItemsJsx = items.map(listItem => 
        <ShoppingItem 
            key={listItem.id} 
            id={listItem.id}
            item={listItem.item}
            quantity={listItem.quantity}
            deleteItem={deleteItem}
        />
    );

    return <ul className="shopping-list-container">{ ItemsJsx }</ul>;
}
