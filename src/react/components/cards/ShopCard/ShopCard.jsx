import React from 'react';
import styles from './ShopCard.module.scss';

const ShopCard = ({title, description, price, image}) => {

    const slicedTitle = title.slice(0, 30);

    return (
        <article className={styles.shopCard}>
            <img className={styles.shopCard__img} src={image} alt="image"/>
            <h2 className={styles.shopCard__title}>{slicedTitle}</h2>
            <p className={styles.shopCard__descr}>{description}</p>
            <span className={styles.shopCard__price}>Price: {price}$</span>
        </article>
    );
};

export default ShopCard;