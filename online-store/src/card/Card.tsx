import s from './Card.module.css'
import React from 'react';
import { CardPropsType } from '../types/types';


const Card: React.FC<CardPropsType> = ({ id, img, name, year, price, type,
  onAddToCart, isAdded, isFiltersOn, producer, onAddToFavorites }) => {
  const [isAddToFavorites, setAddToFavorites] = React.useState(false)

  return (
    <div className={isFiltersOn ? s.sliderOn + ' ' + s.wrapper : s.wrapper}>
      <div className={isAddToFavorites ? s.favorites + ' ' + s.addFav : s.favorites}
        onClick={() => {
          setAddToFavorites(!isAddToFavorites)
          onAddToFavorites({ id, img, name, producer })
        }}>
        <img src="img/main/favorites.svg" alt="" />
      </div>
      <div className={s.producer}>{producer}</div>
      <div className={s.img_wrapper} style={{ backgroundImage: `url(${img})` }}></div>
      <div className={s.name}>{name}</div>
      <div className={s.info}>
        <div className={s.type}>Type: {type}</div>
        <div className={s.year}>Year: {year}</div>
      </div>
      <div className={s.buy_container}>
        <div className={s.price}>Price: <span>{price} $</span></div>
        <div className={s.btn_container}>

          <div className={isAdded(id) ? s.add + ' ' + s.active : s.add}
            onClick={() => onAddToCart({ id, img, name, price })}>Add to Cart</div>
          <div className={isAdded(id) ? s.btn_remove : s.btn_remove + ' ' + s.remove}
            onClick={() => onAddToCart({ id, img, name, price })}>Remove</div>
        </div>
      </div>
    </div>
  )
}

export default Card
