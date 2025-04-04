import React from 'react';
import {useCart} from "../../scripts/hooks/useCart";
import CartItems from "../sections/CartItems/CartItems";

const ShoppingCart = () => {

    const { itemsCount } = useCart();

    return (
        <main>
            {
                itemsCount === 0 ? (
                    <h1 className='pageTitle'>Ваша корзина пуста</h1>
                ) : (
                    <CartItems />
                )
            }

        </main>
    );
};

export default ShoppingCart;