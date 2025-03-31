import {useMemo, useState} from "react";

export const useSerch = (cards) => {
    const [searchQuery, setSearchQuery] = useState('');

    const searchedCards = useMemo(() => {
        return cards.filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, cards]);

    return [searchedCards, searchQuery, setSearchQuery];
}