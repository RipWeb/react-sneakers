import React from 'react'
import AppContext from './context';

const Info = ({image, title, description}) => {
    const { setCartOpened } = React.useContext(AppContext)

    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img src={image} alt="Empty" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
                <img src="/arrow.svg" alt="Arrow" />
                Вернуться назад
            </button>
        </div>
    )
}

export default Info;
