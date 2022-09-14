import React from 'react';
import { AsidePropsType } from '../types/types';
import s from './Aside.module.css'


const Aside: React.FC<AsidePropsType> = ({ title, name, filtered, checkBox }) => {
  const isCheck = (e: string) => {
    return checkBox.includes(e) ? true : false
  }
  const sortInput = (arr: string[]) => {
    return (
      arr.map((e, id) => {
        return <span key={id} className={s.input}>
          <input type="checkbox" checked={isCheck(e)} className={e}
            onChange={(event) => {filtered(event.target.className)}} 
          />
          {e}
        </span>
      })
    )
  }
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <span className={s.block_title}>{title}</span>
        <div className={s.block_input}>
          {sortInput(name)}
        </div>
      </div>
    </div>
  )
}

export default Aside