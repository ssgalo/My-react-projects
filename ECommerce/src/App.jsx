import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { useState } from 'react'
import { useFilters } from './hooks/useFilters'



function App() {

  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header></Header>
      <Products products={filteredProducts}></Products>
    </>
  )
}

export default App
