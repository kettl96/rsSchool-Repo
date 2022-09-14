import { CartPropsType } from '../types/types';
import s from './Cart.module.css'
import Info from './info/Info';

const Cart: React.FC<CartPropsType> =
  ({ opened, onClose, items = [], onRemove, totalPrice }) => {

    return (
      <div className={`${s.cart__sidebar_wrapper} ${opened ? s.visible : ''}`}
        onClick={(el) => {
          if ((el.target as HTMLElement).className.includes('Cart_cart__sidebar_wrapper')) onClose()
        }}>
        <div className={`${s.cart__sidebar} ${opened ? s.cart_visible : ''}`}>
          <h2>
            Cart
          </h2>

          {items.length === 0 &&
            <Info
              onClose={onClose}
              // title={isOrderComplete ? 'Order Complete' : 'Cart is Empty'}
              title={'Cart is Empty'}
              // description={isOrderComplete ? 'Your order will be ready for delivery soon' : 'Add some stuff, buddy!'}
              description={'Add some stuff, buddy!'}
              // img={isOrderComplete ? order : emptyCart} 
              img={'img/cart/empty-cart.png'}
            />}

          {items.length > 0 &&
            <div className={s.content__wrapper}>
              <div>
                {items.map(obj => (
                  <div key={obj.id} className={s.cartItem} style={{ backgroundImage: `url(${obj.img})` }}>
                    <div className={s.cartItem__info}>
                      <p>{obj.name}</p>
                      <b>{obj.price} $</b>
                    </div>
                    <img onClick={() => onRemove(obj.id)} className={s.cart__removeBtn} src='img/cart/removeBtn.svg' alt="remove" />
                  </div>
                ))}
              </div>
              <div className={s.cart__result}>
                <div className={s.result__total}>
                  <div>Total:</div>
                  <div className={s.dash}></div>
                  <div><b>{totalPrice()} $</b></div>
                </div>
                <button >
                  {/* <button onClick={() => onClickOrder(items)}> */}
                  Go to order
                  <img className={s.arrow} src='img/cart/nextArrow.svg' alt="next" />
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }

export default Cart