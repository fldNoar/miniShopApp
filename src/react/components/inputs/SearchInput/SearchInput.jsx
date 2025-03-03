import React from 'react';
import s from './SearchInput.module.scss'

const SearchInput = () => {
    return (
        <>
            <input className={s.searchInput} type='text' placeholder='Search...' />
        </>
    );
};

export default SearchInput;