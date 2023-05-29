import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import './index.css'
import { TakeOrder } from './components/TakeOrder'
import { Order } from './components/Order'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/takeOrder",
    element: <TakeOrder />
  },
  {
    path: "/order",
    element: <Order/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App  />
  </BrowserRouter>
)
