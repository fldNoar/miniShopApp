import React from 'react';
import cl from "./CartItem.module.scss"
import {MdDeleteForever} from "react-icons/md";

const CartItem = ({item, updateQuantity, removeFromCart}) => {
    return (
        <article className={cl.cartItem}>
            <img src={item.images[0]} alt="prod-img" className={cl.cartItem__img}/>
            <div className={cl.cartItem__info}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
            <p className={cl.cartItem__price}>Price: {item.price}$</p>
            <div className={cl.cartItem__edit}>
                <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >-</button>
                <span>{item.quantity}</span>
                <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >+</button>
            </div>
            <MdDeleteForever
                className={cl.cartItem__remove}
                onClick={() => removeFromCart(item.id)}
            />
        </article>
    );
};

export default CartItem;