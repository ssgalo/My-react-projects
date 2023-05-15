import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters(){
    const {filters, setFilters} = useContext(FiltersContext)

    const filterProducts = (products) =>  {
        return products.filter(product => {
          return (
            product.price >= filters.minPrice
          )
        })
    }

    return {filters, setFilters, filterProducts}
}