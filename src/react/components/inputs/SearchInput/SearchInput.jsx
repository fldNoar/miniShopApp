import React from 'react';
import s from './SearchInput.module.scss'

const SearchInput = ({searchQuery, setSearchQuery}) => {
    return (
        <>
            <input
                className={s.searchInput}
                type='text'
                placeholder='Search...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </>
    );
};

export default SearchInput;