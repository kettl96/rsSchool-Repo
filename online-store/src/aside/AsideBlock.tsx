import s from './AsideBlock.module.css'
import Aside from './Aside';
import MultiRangeSlider from './multiRangeSlider/MultiRangeSlider';
import { AsideBlockPropsType } from '../types/types';


const AsideBlock: React.FC<AsideBlockPropsType> = ({
  isFiltersOn, filtered, sliderChange, checkBox,
  filteredType, type, keySlider = 0, clearAllFilter }) => {
  return (
    <div className={isFiltersOn ? s.wrapper + ' ' + s.slide : s.wrapper}>
      <div className={s.clear_btn} onClick={clearAllFilter}>Clear All</div>
      <Aside
        checkBox={checkBox}
        filtered={filtered}
        title={'Producers'}
        name={['Specialized', 'Cannondale', 'Cube']}
      />
      <Aside
        checkBox={type}
        filtered={filteredType}
        title={'Type'}
        name={['Mountain', 'Road', 'Electric']}
      />
      <div className={s.slider_wrapper}>
        <div className={s.slider_name}>
          Price
        </div>
        <MultiRangeSlider
          key={keySlider}
          min={0}
          max={15000}
          onChange={({ min, max, type }: { min: number; max: number, type: string }) => sliderChange(min, max, 'price')}
        />
      </div>
      <div className={s.slider_wrapper}>
        <div className={s.slider_name}>
          Year
        </div>
        <MultiRangeSlider
          key={keySlider + 1}
          min={2018}
          max={2022}
          onChange={({ min, max, type }: { min: number; max: number, type: string }) => sliderChange(min, max, 'year')}
        />
      </div>
    </div>
  )
}

export default AsideBlock