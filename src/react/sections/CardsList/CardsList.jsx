import React from 'react';
import ShopCard from "../../components/cards/ShopCard/ShopCard";
import styles from "./CardsList.module.scss";

const CardsList = ({cards, addToCart}) => {
    return (
        <section className={styles.cardsContainer}>
            {cards.map((card, index) => (
                <ShopCard key={index} cardProps={card} addToCart={addToCart} />
            ))}
        </section>
    );
};

export default CardsList;