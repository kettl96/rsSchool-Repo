import { FavoritesInfoPropsType } from '../../types/types'
import s from './Info.module.css'

const Info: React.FC<FavoritesInfoPropsType> = ({ title, description, img, }) => {

  return (
    <div className={s.empty__container}>
      <img src={img} alt="empty" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Info