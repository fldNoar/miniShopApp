import React, {useEffect, useState} from 'react';
import CardsList from "../../../sections/CardsList/CardsList";
import s from './WrapContainer.module.scss'
import SearchInput from "../../inputs/SearchInput/SearchInput";
import Loader from "../../ui/Loader/Loader";
import {useFetching} from "../../../../scripts/hooks/useFetching";
import CardsService from "../../../../scripts/backend/API/CardsService";
import {useSerch} from "../../../../scripts/hooks/useSerch";

const WrapContainer = () => {
    const [cards, setCards] = useState([]);
    const [fetchProducts, isLoadingProducts, prodError] = useFetching(async () => {
        const response = await CardsService.getProducts();
        setCards(response);
    })
    let [searchedCards, searchQuery, setSearchQuery] = useSerch(cards);

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className={s.wrapContainer}>
            <div className="search__block">
                <SearchInput setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
            </div>
            {isLoadingProducts
                ? <Loader />
                : <CardsList cards={searchedCards} />
            }
        </div>
    );
};

export default WrapContainer;