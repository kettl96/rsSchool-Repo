import { FavoritesPropsType } from '../types/types';
import s from './Favorites.module.css'
import Info from './infoFavorites/Info';

const Favorites: React.FC<FavoritesPropsType> = ({ opened, onClose, items = [] }) => {

  return (
    <div className={`${s.cart__sidebar_wrapper} ${opened ? s.visible : ''}`}
      onClick={(el) => {
        if ((el.target as HTMLElement).className.includes('Favorites_cart__sidebar_wrapper__abN1m')) onClose()
      }}>
      <div className={`${s.cart__sidebar} ${opened ? s.cart_visible : ''}`}>
        <h2>
          Your favorites
        </h2>

        {items.length === 0 &&
          <Info
            title={'Favorites is Empty'}
            description={'Add some stuff, buddy!'}
            img={'img/cart/empty-cart.png'}
          />}

        {items.length > 0 &&
          <div className={s.content__wrapper}>

            {items.map((obj, i) => (
              <div key={i} className={s.cartItem} >
                <div className={s.cartItem__info}>
                  <b>{obj.producer}</b>
                  <p>{obj.name}</p>
                </div>
                <div className={s.img} style={{ backgroundImage: `url(${obj.img})` }}></div>

              </div>
            ))}

          </div>
        }
      </div>
    </div>
  )
}

export default Favorites