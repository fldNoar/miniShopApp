import React from 'react';
import styles from './ShopCard.module.scss';

const ShopCard = ({title, description, price}) => {
    return (
        <article className={styles.shopCard}>
            <img className={styles.shopCard__img} src="https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg" alt="image"/>
            <h2 className={styles.shopCard__title}>{title}</h2>
            <p className={styles.shopCard__descr}>{description}</p>
            <span className={styles.shopCard__price}>Price: {price}$</span>
        </article>
    );
};

export default ShopCard;