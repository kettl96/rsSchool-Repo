import { sortArrayType } from "../types/types"

const filteredData = (data: sortArrayType, searchValue: string, checkBox: string[],
  type: string[], minPrice: number, maxPrice: number, minYear: number, maxYear: number) => {
  return data
    .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())
      || item.producer.toLowerCase().includes(searchValue.toLowerCase())
      || (item.year as string).includes(searchValue.toLowerCase()))
    .filter(item => checkBox.length === 0
      ? true
      : checkBox.includes(item.producer))
    .filter(item => type.length === 0
      ? true
      : type.includes(item.type) || type.includes(item.electric))
    .filter(item => item.price > minPrice && item.price <= maxPrice)
    .filter(item => item.year >= minYear && item.year <= maxYear)
}

export default filteredData