import Header from './components/Header.js';
import Home from './pages/Home.jsx';
import Drawer from './components/Drawer/Drawer.js';
import React from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import Favorites from './pages/Favorites.jsx';
import AppContext from './components/context.js';
import Orders from './pages/Orders.jsx';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const cartRes = await axios.get('https://66a4c5ee5dc27a3c1909c505.mockapi.io/cart');
        const favRes = await axios.get('https://66a8079a53c13f22a3d1b746.mockapi.io/favorites');
        const itemsRes = await axios.get('https://66a4c5ee5dc27a3c1909c505.mockapi.io/items');

        setIsLoading(false);

        setCartItems(cartRes.data);
        setFavorites(favRes.data);
        setItems(itemsRes.data);
      } catch (error) {
        alert("err3");
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://66a4c5ee5dc27a3c1909c505.mockapi.io/cart/${findItem.id}`);
      } else {
        const { data } = await axios.post('https://66a4c5ee5dc27a3c1909c505.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, data]);
      }
    } catch (error) {
      alert("err4");
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://66a4c5ee5dc27a3c1909c505.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://66a8079a53c13f22a3d1b746.mockapi.io/favorites/${obj.id}`);
      } else {
        obj.id = obj.id - 1
        const { data } = await axios.post('https://66a8079a53c13f22a3d1b746.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data])
      }
    } catch {
      alert('Ошибка!');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  }

  return <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems, onAddToFavorite, onAddToCart }}>
    <div className="wrapper clear">
      <Drawer onRemove={onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)} opened={cartOpened} />
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>

        <Route path="/" element={<Home items={items}
          searchValue={searchValue}
          cartItems={cartItems}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToСart={onAddToCart}
          isLoading={isLoading} />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/orders" element={<Orders />} />

      </Routes>
    </div >
  </AppContext.Provider>;
}

export default App;