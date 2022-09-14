export type sortArrayType = {
  id: number
  img: string
  name: string
  producer: string
  year: string | number
  price: string | number
  type: string
  electric: string
}[]
export type cartDataType = {
  id: number;
  img: string;
  name: string;
  price: string | number;
}[]
export type favoritesType = {
  id: number
  img: string
  name: string
  producer: string
}[]
export type addToCart = {
  id: number
  img: string
  name: string
  price: string | number
}
export type addToFavorites = {
  id: number
  img: string
  name: string
  producer: string;
}
export type MainPropsType = {
  data: sortArrayType
  onAddToCart: (obj: { id: number, img: string, name: string, price: string | number }) => void
  isAdded: (id: number) => boolean
  searchValue: string
  onChangeSearch: (event: { target: { value: React.SetStateAction<string>; }; }) => void
  setSearchValue: (React.Dispatch<React.SetStateAction<string>>)
  filtersOn: () => void
  isFiltersOn: boolean
  sorted: (id: string) => void
  sortValue: string
  setSortValue: React.Dispatch<React.SetStateAction<string>>
  checkBox: string[]
  type: string[]
  minPrice: number
  maxPrice: number
  minYear: number
  maxYear: number
  onAddToFavorites: (obj: { id: number; img: string; name: string; producer: string; }) => void
}
export type CardPropsType = {
  id: number
  img: string
  name: string
  year: number | string
  price: string | number
  producer: string
  type: string
  onAddToCart: (obj: addToCart) => void
  isAdded: (id: number) => boolean
  isFiltersOn: boolean
  onAddToFavorites: (obj: addToFavorites) => void
}
export type AsideBlockPropsType = {
  isFiltersOn: boolean
  filtered: (filter: string) => void
  sliderChange: (min: number, max: number, type: string) => void
  checkBox: string[]
  filteredType: (filter: string) => void
  type: string[]
  keySlider: number
  clearAllFilter: () => void
}
export type AsidePropsType = {
  title: string
  name: string[]
  checkBox: string[]
  filtered: (filter: string) => void
}
export type CartPropsType = {
  opened: boolean
  onClose: () => void
  items: cartDataType
  onRemove: (id: number) => void
  totalPrice: () => string
}
export type InfoPropsType = {
  title: string
  description: string
  img: string
  onClose: () => void
}
export type FavoritesInfoPropsType = {
  title: string
  description: string
  img: string
}
export type FavoritesPropsType = {
  opened: boolean
  onClose: () => void
  items:  favoritesType
}