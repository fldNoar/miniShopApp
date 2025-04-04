import React from 'react';
import cl from './MoreButton.module.scss'

const DefaulBtn = ({currentLimit, setLimit, children}) => {
    return (
        <button
            className={cl.moreBtn}
            onClick={() => setLimit(currentLimit + 12)}
        >
            {children}
        </button>
    );
};

export default DefaulBtn;