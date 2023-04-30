import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import './index.css'
import { TakeOrder } from './components/TakeOrder'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/takeOrder",
    element: <TakeOrder />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App  />
  </BrowserRouter>
)
