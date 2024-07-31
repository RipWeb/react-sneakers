import Info from "../Info";
import React from "react";
import axios from "axios";
import { useCart } from "../../hooks/useCart";
import styles from './Drawer.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Drawer({ onClose, items = [], onRemove, opened }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://66a8079a53c13f22a3d1b746.mockapi.io/orders', { items: cartItems});
            setOrderId(data.id)
            setIsOrderComplete(true);
            setCartItems([]);
            for (let i = 0; i < cartItems.length; i++){
                const item = cartItems[i];
                await axios.delete(`https://66a4c5ee5dc27a3c1909c505.mockapi.io/cart/${item.id}`);
                await delay(500);
            }
        } catch (error) {
            alert('Ошибка 1');
            console.log(error);
        }
        setIsLoading(false);
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={`${styles.drawer}`}>
                <h2 className="d-flex justify-between mb-30">
                    Корзина<img onClick={onClose} className="cu-p" src="btn-remove.svg" alt="Remove" />
                </h2>

                {items.length > 0 ? <>
                    <div className="items">
                        {items.map((obj) =>
                            <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                <div className="cartItemImg" style={{ backgroundImage: `url(${obj.imageUrl})` }}></div>
                                <div className="mr-20 flex">
                                    <p className="mb-5">{obj.title}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <img onClick={() => onRemove(obj.id)} className="removeBtn" src="btn-remove.svg" alt="Remove"></img>
                            </div>
                        )}
                    </div>
                    <div className="cartTotalBlock">
                        <ul>
                            <li className="d-flex">
                                <span>Итого:</span>
                                <div></div>
                                <b>{totalPrice} руб.</b>
                            </li>
                            <li className="d-flex">
                                <span>Доставка:</span>
                                <div></div>
                                <b>{Math.floor(totalPrice * 0.05)} руб.</b>
                            </li>
                        </ul>
                        <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img className="arr" src="arrow.svg" alt="Arrow" /></button>
                    </div>
                </> :
                    <Info
                        title={isOrderComplete ? "Заказ оформлен!" : "Тут пусто =("}
                        description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                        image={isOrderComplete ? "/c-order.svg" : "/empty-cart.svg"} />}
            </div>
        </div>
    );
}