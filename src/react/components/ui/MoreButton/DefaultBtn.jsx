import React from 'react';
import cl from './DefaultBtn.module.scss'

const DefaultBtn = ({currentLimit, setLimit, children}) => {
    return (
        <button
            className={cl.moreBtn}
            onClick={() => setLimit(currentLimit + 12)}
        >
            {children}
        </button>
    );
};

export default DefaultBtn;