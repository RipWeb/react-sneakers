import React from 'react';
import Card from '../components/Card/Card.js';

export default function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToСart, isLoading }) {

    const renderItems = () => {
        const filtredItems = items.filter((item) => 
            item.title.toLowerCase().includes(searchValue.toLowerCase()))

        return (isLoading
            ? [...Array(8)]
            : filtredItems)
            .map((item, index) =>
                <Card
                    key={index}
                    onFavorite={obj => onAddToFavorite(obj)}
                    onPlus={(obj) => { onAddToСart(obj) }}
                    loading={isLoading}
                    {...item} />
            )
    };

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block d-flex">
                    <img src="/search.svg" alt="Search" />
                    {searchValue && <img src="/btn-remove.svg" onClick={() => { setSearchValue('') }} alt="Clear" className='clear'></img>}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {renderItems()}
            </div>
        </div>
    );
}