import React from 'react';
import ShopCard from "../../components/cards/ShopCard/ShopCard";
import styles from "./CardsList.module.scss";

const CardsList = ({cards}) => {
    return (
        <section className={styles.cardsContainer}>
            {cards.map((card, index) => (
                <ShopCard key={index} title={card.title} description={card.description} price={card.price} image={card.images[0]} />
            ))}
        </section>
    );
};

export default CardsList;