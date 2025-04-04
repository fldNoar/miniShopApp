import React from 'react';
import styles from './ShopCard.module.scss';
import {BsCartPlus} from "react-icons/bs";

const ShopCard = ({cardProps, addToCart}) => {

    const slicedTitle = cardProps.title.slice(0, 30);

    return (
        <article className={styles.shopCard}>
            <img className={styles.shopCard__img} src={cardProps.images[0]} alt="image"/>
            <h2 className={styles.shopCard__title}>{slicedTitle}</h2>
            <p className={styles.shopCard__descr}>{cardProps.description}</p>
            <div>
                <span className={styles.shopCard__price}>Price: {cardProps.price}$</span>
                <button
                    onClick={() => addToCart(cardProps)}
                >
                    <BsCartPlus />
                </button>
            </div>
        </article>
    );
};

export default ShopCard;