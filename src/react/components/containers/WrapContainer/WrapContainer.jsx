import React from 'react';
import CardsList from "../../../sections/CardsList/CardsList";
import s from './WrapContainer.module.scss'
import NavigateContainer from "../NavigateContainer/NavigateContainer";

const WrapContainer = () => {
    return (
        <div className={s.wrapContainer}>
            <NavigateContainer />
            <CardsList />
        </div>
    );
};

export default WrapContainer;