import s from './Info.module.css'
import { Link } from 'react-router-dom'
import { InfoPropsType } from '../../types/types'

const Info: React.FC<InfoPropsType> = ({ title, description, img, onClose, }) => {

  return (
    <div className={s.empty__container}>
      <img src={img} alt="empty" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to='/'>
        <button onClick={onClose}>
          Back to shopping
          <img src='img/cart/prev-arrow.svg' className={s.return__arrow} alt="return" />
        </button>
      </Link>
    </div>
  )
}

export default Info