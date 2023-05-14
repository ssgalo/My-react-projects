import { Fragment, useState } from 'react'
import { Header } from './components/Header';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';
import { TakeOrder } from './components/TakeOrder';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar/>

      <Routes>

        <Route path="/" element={<Header/>}>
        </Route>
        
        <Route path="/takeOrder" element={<TakeOrder/>}>
        </Route>
        
      </Routes>
      
    </div>
  )
}

export default App
