import React from 'react';
import CartItem from "../../components/cards/CartItem/CartItem";
import {useCart} from "../../../scripts/hooks/useCart";
import cl from "./CartItems.module.scss";
import DefaultBtn from "../../components/ui/MoreButton/DefaultBtn";

const CartItems = () => {

    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal,
        itemsCount
    } = useCart();

    return (
        <section className={cl.cartItems}>
            <h1 className='pageTitle'>Корзина содержит {itemsCount} товаров</h1>
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
            ))}

            <div className={cl.cartItems__summary}>
                <h3>Итого: {cartTotal.toFixed(2)}$.</h3>
                <DefaultBtn>Оформить заказ</DefaultBtn>
            </div>
        </section>
    );
};

export default CartItems;