import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { useState } from 'react'

const INITIAL_FILTERS = {
  minPrice:1
}

function App() {

  const [filters, setFilters] = useState(INITIAL_FILTERS)

  const filterProducts = (products) =>  {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice
      )
    })
  }

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header setFilters={setFilters}></Header>
      <Products products={filteredProducts}></Products>
    </>
  )
}

export default App
