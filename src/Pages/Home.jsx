import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup, PizzaBlock, LoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";


const categoryNames =['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name: 'популярности', type: 'popular', order:'desc'},
    {name: 'цене', type:'price', order:'desc'},
    {name: 'алфавиту', type:'name', order:'asc'}
];

const Home = () => {

    const dispatch = useDispatch();
    const items = useSelector(({ pizzas}) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({ filters}) => filters);


    useEffect(() => {
         dispatch(fetchPizzas(sortBy,category));
    },[category, sortBy]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    },[]);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    },[]);

    const handleAddPizzaToCart = obj => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
        })
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    onClickSortType={onSelectSortType}
                    activeSortType={sortBy.type}
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => (
                        <PizzaBlock
                            onClickAddPizza={handleAddPizzaToCart}
                            key={obj.id}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                            {...obj}
                        />
                    ))
                    : Array(12)
                        .fill(0)
                        .map((_, index) => <LoadingBlock key={index}/>)
                }

            </div>
        </div>
    );
};

export default Home;