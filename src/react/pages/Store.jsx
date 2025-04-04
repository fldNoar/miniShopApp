import React, {useEffect, useState} from 'react';
import {useFetching} from "../../scripts/hooks/useFetching";
import CardsService from "../../scripts/backend/API/CardsService";
import {useSerch} from "../../scripts/hooks/useSerch";
import SearchInput from "../components/inputs/SearchInput/SearchInput";
import Loader from "../components/ui/Loader/Loader";
import CardsList from "../sections/CardsList/CardsList";
import DefaulBtn from "../components/ui/MoreButton/DefaulBtn";
import {BsCartFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {useCart} from "../../scripts/hooks/useCart";

const Store = () => {
    const [cards, setCards] = useState([]);
    const [prodLimit, setProdLimit] = useState(12);
    const [fetchProducts, isLoadingProducts, prodError] = useFetching(async () => {
        const response = await CardsService.getProducts(prodLimit);
        setCards(response);
    })
    let [searchedCards, searchQuery, setSearchQuery] = useSerch(cards);
    const {addToCart} = useCart();

    useEffect(() => {
        fetchProducts();
    }, [prodLimit]);

    return (
        <main className='store'>
            <h1 className='pageTitle'>Shop Cards App</h1>
            <div className="search__block">
                <SearchInput setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
                <Link to="/shop-cart" className="search__cart">
                    <BsCartFill />
                </Link>
            </div>
            {isLoadingProducts
                ? <Loader />
                : <CardsList cards={searchedCards} addToCart={addToCart} />
            }
            <DefaulBtn currentLimit={prodLimit} setLimit={setProdLimit} > Загрузить еще </DefaulBtn>
        </main>
    );
};

export default Store;