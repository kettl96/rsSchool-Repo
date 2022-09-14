import Card from '../card/Card'
import s from './Main.module.css'
import React from 'react';
import filteredData from './filter';
import { addToCart, addToFavorites, MainPropsType, sortArrayType } from '../types/types';


const Main: React.FC<MainPropsType> = ({ data, onAddToCart, isAdded, onChangeSearch,
  searchValue, setSearchValue, filtersOn, isFiltersOn,
  sorted, sortValue, setSortValue, checkBox, type,
  minPrice, maxPrice, minYear, maxYear, onAddToFavorites, }) => {

  const [sizeCard, setSizeCard] = React.useState(Number)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dispArr: {}[] = []
  React.useEffect(() => {
    setSizeCard(dispArr.length)
  }, [dispArr])

  const renderItems = (data: sortArrayType) => {
    return (
      <>
        {filteredData(data, searchValue, checkBox, type, minPrice, maxPrice, minYear, maxYear)
          .map(e => {
            dispArr.push(e)
            return <Card
              key={e.id}
              id={e.id}
              img={e.img}
              name={e.name}
              producer={e.producer}
              year={e.year}
              price={e.price}
              type={e.type}
              onAddToCart={(obj: addToCart) => { onAddToCart(obj) }}
              isAdded={isAdded}
              isFiltersOn={isFiltersOn}
              onAddToFavorites={(obj: addToFavorites) => { onAddToFavorites(obj) }}
            />
          })
        }
        {
          sizeCard === 0 &&
          <div className={s.nothing_wrapper}>
            <div>Nothing was found for your request</div>
            <img src="img/main/smile.png" alt="" />
          </div>
        }
      </>
    )
  }
  const defaultValue = (value: string) => {
    return (
      <select
        value={value}
        onChange={event => {
          sorted(event.target.value)
          setSortValue(event.target.value)
        }}>
        <option value={'0'}>Default</option>
        <option value={'1'}>Price (Low to Hight)</option>
        <option value={'2'}>Price (Hight to Low)</option>
        <option value={'3'}>Year (New)</option>
      </select>
    )
  }
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.main_title}>
          <h1>{searchValue ? `Search by: "${searchValue}"` : 'All Bikes'}</h1>
        </div>
        <div className={s.sort}>
          <div className={s.select_wrapper}>
            Sort By:
            {defaultValue(sortValue)}
          </div>
          <div className={s.filters}>
            <div>Filters: </div>
            <label className={s.switch} onChange={filtersOn}>
              <input type='checkbox' />
              <span className={s.slider + ' ' + s.round}></span>
            </label>
          </div>
          <div className={s.search__container}>
            <img src='img/main/search.svg' alt="Search" />
            <input type="text" placeholder='Search...'
              onChange={onChangeSearch}
              value={searchValue}
              autoFocus
            />
            {searchValue && <img src='img/main/plus.svg' alt="del" className={s.cross}
              onClick={() => setSearchValue('')} />}
          </div>
        </div>
      </div>
      <div className={s.card__wrapper}>
        {renderItems(data)}
      </div>
    </div>

  )
}

export default Main