import AppContext from '../components/context.js';
import Card from '../components/Card/Card.js';
import React from 'react';

export default function Favorites() {
    const { favorites, onAddToFavorite } = React.useContext(AppContext);

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои закладки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {favorites.map((item, index) =>
                    <Card
                        key={index}
                        {...item}
                        favorited={true}
                        onFavorite={onAddToFavorite} />
                )}
            </div>
        </div>
    );
}