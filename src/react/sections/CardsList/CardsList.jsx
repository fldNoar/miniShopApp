import React, {useState} from 'react';
import ShopCard from "../../components/cards/ShopCard/ShopCard";
import styles from "./CardsList.module.scss";

const CardsList = () => {

    const [cards, setCards] = useState([
        {id: 1, title: 'Card 1', description: 'Lorem ipsum dolor sit amet consectetur. Ultrices ut quam ornare hac et phasellus suspendisse pellentesque velit.', price: 9.99},
        {id: 2, title: 'Card 2', description: 'Lorem ipsum dolor sit amet consectetur. Ultrices ut quam ornare hac et phasellus suspendisse pellentesque velit.', price: 4.99},
        {id: 3, title: 'Card 3', description: 'Lorem ipsum dolor sit amet consectetur. Ultrices ut quam ornare hac et phasellus suspendisse pellentesque velit.', price: 2.99},
        {id: 4, title: 'Card 4', description: 'Lorem ipsum dolor sit amet consectetur. Ultrices ut quam ornare hac et phasellus suspendisse pellentesque velit.', price: 11.99},
        {id: 5, title: 'Card 5', description: 'Lorem ipsum dolor sit amet consectetur. Ultrices ut quam ornare hac et phasellus suspendisse pellentesque velit.', price: 5.99},
        {id: 6, title: 'Card 6', description: 'Lorem ipsum dolor sit amet consectetur. Ultrices ut quam ornare hac et phasellus suspendisse pellentesque velit.', price: 1.99},
    ]);

    const [selectedCard, setSelectedCard] = useState('');

    return (
        <section className={styles.cardsContainer}>
            {cards.map((card, index) => (
                <ShopCard key={index} title={card.title} description={card.description} price={card.price} />
            ))}
        </section>
    );
};

export default CardsList;