import s from './Header.module.css'

type HeaderPropsType = {
  onClickCart: () => void
  onClickFavorites: () => void
  totalPrice: () => string
}
const Header: React.FC<HeaderPropsType> = ({onClickCart, totalPrice, onClickFavorites}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.logo_wrapper}>
        <img className={s.logoImg} src="img/header/logo.svg" alt="" />
        <div className={s.logoTittle}>Roll All Day</div>
      </div>
      <ul className={s.list_wrapper}>
        <li className={s.list_item}>
          <img src="img/header/cart.svg" alt="" onClick={onClickCart} />
          <span>{totalPrice()} $</span>
        </li>
        <li className={s.list_item}>
          <img src="img/header/favorites.svg" alt="" onClick={onClickFavorites} />
        </li>
      </ul>
    </div>
  )
}

export default Header