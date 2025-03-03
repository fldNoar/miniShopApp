import React from 'react';
import SearchInput from "../../inputs/SearchInput/SearchInput";
import s from './NavigateContainer.module.scss';

const NavigateContainer = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <div className={s.navigateContainer}>
            <SearchInput />
        </div>
    );
};

export default NavigateContainer;