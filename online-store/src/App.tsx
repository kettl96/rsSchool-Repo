import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Cart from './cart/Cart';

import data from './data.json'
import { Route, Routes } from 'react-router-dom';
import AsideBlock from './aside/AsideBlock';
import Favorites from './favorites/Favorites';
import { addToCart, addToFavorites, cartDataType, favoritesType, sortArrayType } from './types/types';
import Footer from './footer/Footer';


function App() {
  const [dataItems, setDataItems] = React.useState([] as sortArrayType)
  const [cartOpened, setCartOpened] = React.useState(false)
  const [favoritesOpened, setFavoritesOpened] = React.useState(false)
  const [isFiltersOn, setFiltersOn] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([] as cartDataType)
  const [favoritesItems, setFavoritesItems] = React.useState([] as favoritesType)
  const [searchValue, setSearchValue] = React.useState('')
  const [sortValue, setSortValue] = React.useState('')
  const [checkBox, setCheckBox] = React.useState([] as string[])
  const [type, setType] = React.useState([] as string[])
  const [minPrice, setMinPrice] = React.useState(Number)
  const [maxPrice, setMaxPrice] = React.useState(Number)
  const [maxYear, setMaxYear] = React.useState(Number)
  const [minYear, setMinYear] = React.useState(Number)
  const [keySlider, setKeySlider] = React.useState(0)

  React.useEffect(() => {
    async function getData() {
      try {
        const sortSettings = localStorage.getItem('sort')
        sortSettings !== null
          ? setDataItems([...JSON.parse(sortSettings)] as never[])
          : setDataItems([...data as sortArrayType] as never[])
        const storageSortValue = localStorage.getItem('sortValue')
        storageSortValue !== null
          ? setSortValue(JSON.parse(storageSortValue))
          : setSortValue('0')
        const cartData = localStorage.getItem('cartData')
        cartData !== null
          ? setCartItems(JSON.parse(cartData))
          : setCartItems([])
        const checkBoxValue = localStorage.getItem('filtered')
        checkBoxValue !== null
          ? setCheckBox(JSON.parse(checkBoxValue))
          : setCheckBox([])

        const checkType = localStorage.getItem('filteredType')
        checkType !== null
          ? setType(JSON.parse(checkType))
          : setType([])
        const favoritesArr = localStorage.getItem('favorites') as string
        favoritesArr !== null || undefined
          ? setFavoritesItems(JSON.parse(favoritesArr))
          : setFavoritesItems([])
      } catch (error) {
        alert('reload page')
      }
    }
    getData()
  }, [])

  const saveInStore = (arr: cartDataType) => {
    localStorage.removeItem('cartData')
    localStorage.setItem('cartData', JSON.stringify(arr))
  }
  const onAddToCart = (obj: { id: number; img: string; name: string; price: string | number; }) => {
    if (cartItems.find(cartObj => cartObj.id === obj.id)) {
      setCartItems(prev => prev.filter(el => el.id !== obj.id))
      let step = cartItems.filter(el => el.id !== obj.id)
      saveInStore(step)
    } else {
      setCartItems([...cartItems, obj])
      saveInStore(cartItems.concat(obj))
    }
  }
  const deleteFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
    saveInStore(cartItems.filter(item => item.id !== id))
  }
  const isItemAdded = (id: number) => {
    return cartItems.some(obj => obj.id === id) as boolean
  }
  const onChangeSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchValue(event.target.value)
  }
  const filtersOn = () => {
    setFiltersOn(!isFiltersOn)
  }
  const sorted = (id: string) => {
    if (id === '1') {
      let sorted = dataItems.sort((a, b) => Number(a.price) - Number(b.price))
      setDataItems([...sorted])
      saveSettings('sort', sorted)
      saveSettings('sortValue', '1')
    }
    if (id === '2') {
      let sorted = dataItems.sort((a, b) => Number(b.price) - Number(a.price))
      setDataItems([...sorted])
      saveSettings('sort', sorted)
      saveSettings('sortValue', '2')
    }
    if (id === '3') {
      let sorted = dataItems.sort((a, b) => Number(b.year) - Number(a.year))
      setDataItems([...sorted])
      saveSettings('sort', sorted)
      saveSettings('sortValue', '3')

    }
    if (id === '0') {
      setDataItems([...data] as never[])
      saveSettings('sort', data)
      saveSettings('sortValue', '0')
    }
  }
  const totalPrice = () => {
    let num = cartItems.map(e => Number(e.price.toString().split(',').join('')))
    let step = num.reduce((sum, obj) => obj + sum, 0)
    let res = step.toString().split('')
    res.splice(res.length - 3, 0, ',')
    return res.join('').length === 2 ? '0' : res.join('')
  }
  const saveSettings = (name: string, obj: {}) => {
    localStorage.removeItem(name)
    localStorage.setItem(name, JSON.stringify(obj))
  }
  const filtered = (filter: string) => {
    if (!checkBox.includes(filter as never)) {
      setCheckBox([...checkBox, filter])
      saveSettings('filtered', [...checkBox, filter])
    } else {
      const deleteFilter = checkBox.indexOf(filter)
      checkBox.splice(deleteFilter, 1)
      setCheckBox(checkBox)
      saveSettings('filtered', [...checkBox])
      if (checkBox.length === 0) {
        saveSettings('filtered', [])
      }
      setDataItems([...dataItems])
    }
  }
  const filteredType = (filter: string) => {
    if (!type.includes(filter as never)) {
      setType([...type, filter])
      saveSettings('filteredType', [...type, filter])
    } else {
      const deleteFilter = type.indexOf(filter)
      type.splice(deleteFilter, 1)
      setType(type)
      saveSettings('filteredType', [...type])
      if (type.length === 0) {
        saveSettings('filteredType', [])
      }
      setDataItems([...dataItems])
    }
  }
  const sliderChange = (min: number, max: number, type: string) => {
    if (type === 'price') {
      setMinPrice(min)
      setMaxPrice(max)
    }
    if (type === 'year') {
      setMaxYear(max)
      setMinYear(min)
    }
  }
  const clearAllFilter = () => {
    setKeySlider(keySlider + 1)
    sorted('0')
    setSortValue('0')
    setCheckBox([])
    setType([])
    localStorage.removeItem('filtered')
    localStorage.removeItem('filteredType')
  }

  const onAddToFavorites = (obj: { id: number; img: string; name: string; producer: string; }) => {
    if (favoritesItems.find(favObj => favObj.id === obj.id)) {
      console.log(555);
      setFavoritesItems(prev => prev.filter(el => el.id !== obj.id))
      let step = favoritesItems.filter(el => el.id !== obj.id)
      console.log(step);
      saveSettings('favorites', step)
    } else {
      setFavoritesItems([...favoritesItems, obj])
      saveSettings('favorites', favoritesItems.concat(obj))
    }
  }

  return (
    <div className="App">
      <Favorites
        items={favoritesItems}
        opened={favoritesOpened}
        onClose={() => { setFavoritesOpened(false) }}
      />
      <Cart
        items={cartItems}
        opened={cartOpened}
        onClose={() => { setCartOpened(false) }}
        onRemove={deleteFromCart}
        totalPrice={totalPrice}
      />
      <Header
        onClickCart={() => setCartOpened(true)}
        onClickFavorites={() => setFavoritesOpened(true)}
        totalPrice={totalPrice}
      />
      <Routes>
        <Route path='/' element={
          <div className='main_wrapper'>
            <AsideBlock
              isFiltersOn={isFiltersOn}
              filtered={filtered}
              filteredType={filteredType}
              sliderChange={sliderChange}
              checkBox={checkBox}
              type={type}
              keySlider={keySlider}
              clearAllFilter={clearAllFilter}
            />
            <Main
              isAdded={isItemAdded}
              data={dataItems}
              onAddToCart={(obj: addToCart) => { onAddToCart(obj) }}
              searchValue={searchValue}
              onChangeSearch={onChangeSearch}
              setSearchValue={setSearchValue}
              filtersOn={filtersOn}
              isFiltersOn={isFiltersOn}
              sorted={sorted}
              sortValue={sortValue}
              setSortValue={setSortValue}
              checkBox={checkBox}
              type={type}
              minPrice={minPrice}
              maxPrice={maxPrice}
              minYear={minYear}
              maxYear={maxYear}
              onAddToFavorites={(obj: addToFavorites) => { onAddToFavorites(obj) }}
            />
          </div>} >
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
