export default function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина <img className="cu-p" src="btn-remove.svg" alt="Remove"></img></h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{ backgroundImage: 'url(sneakers/1.png)' }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999 руб.</b>
                        </div>
                        <img className="removeBtn" src="btn-remove.svg" alt="Remove"></img>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{ backgroundImage: 'url(sneakers/2.jpg)' }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999 руб.</b>
                        </div>
                        <img className="removeBtn" src="btn-remove.svg" alt="Remove"></img>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{ backgroundImage: 'url(sneakers/1.png)' }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999 руб.</b>
                        </div>
                        <img className="removeBtn" src="btn-remove.svg" alt="Remove"></img>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img className="arr" src="arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    );
}