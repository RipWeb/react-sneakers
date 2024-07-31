import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={20} height={20} src="/cart.svg" alt="logo" />
          <span style={{ fontSize: '18px', margin: 'auto' }}>{totalPrice} руб.</span>
        </li>
        <li className="mr-10 cu-p">
          <Link to="/favorites">
            <img width={20} height={20} src="/heart.svg" alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={20} height={20} src="/user.svg" alt="logo" />
          </Link>
        </li>
      </ul>
    </header>
  );
}