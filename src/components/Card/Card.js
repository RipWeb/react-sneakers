import React from 'react'
import styles from './Card.module.scss'
import ContentLoader from 'react-content-loader';
import AppContext from '../context.js';

export default function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, loading }) {
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const { isItemAdded } = React.useContext(AppContext);
    const obj = { id, parentId: id, title, imageUrl, price };

    const onClickPlus = () => {
        onPlus(obj);
    }

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            {loading
                ?
                <ContentLoader
                    speed={2}
                    width={150}
                    height={230}
                    viewBox="0 0 150 230"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb" >
                    <rect x="117" y="104" rx="0" ry="0" width="0" height="1" />
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="115" />
                    <rect x="-1" y="136" rx="10" ry="10" width="150" height="15" />
                    <rect x="0" y="160" rx="10" ry="10" width="100" height="15" />
                    <rect x="-1" y="194" rx="10" ry="10" width="80" height="24" />
                    <rect x="118" y="187" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
                :
                <>
                    {onFavorite && <div className={styles.favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? "/heart-liked.svg" : "/heart-unliked.svg"} alt="Unliked" />
                    </div>}
                    <img width={133} height={112} src={imageUrl} alt="Sneakers" />
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        {onPlus && <img className={styles.plus} onClick={onClickPlus} src={isItemAdded(id) ? "/mark.svg" : "/btn-plus.svg"} alt="a" />}
                    </div>
                </>
            }
        </div >
    )
}