import { Fragment, useEffect, useState } from 'react'
import { Header } from './components/Header';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';
import { TakeOrder } from './components/TakeOrder';
import { Navbar } from './components/Navbar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Order } from './components/Order';
import { ModalOrder } from './components/ModalOrder';

function App() {

  const [modal, setModal] =  useState(false)

  useEffect(() => {
    console.log(modal)
  },[modal])

  const handleClick = () => {
    setModal(prevState => {
      const newState = !prevState
      setModal(newState)
    })
  }
  return (
    <div style={{ display: "flex", height: "100vh" }}>  
      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1"
          component={<Link to="/"/>}
          >
            <h2 className='title-navbar'>EatTime</h2>
          </MenuItem>
          <MenuItem component={<Link to="/"/>}> Pedido Simple </MenuItem>
          <MenuItem> Carrito  </MenuItem>
          <SubMenu label="Pedidos de Equipos">
            <MenuItem> Pedir para mi equipo </MenuItem>
            <MenuItem> Pedir para otro equipo </MenuItem>
          </SubMenu>
          <SubMenu label="Restaurantes">
            <MenuItem>Asociados a la empresa</MenuItem>
            <MenuItem>Generales</MenuItem>
          </SubMenu>
          <MenuItem onClick={handleClick}> Mi Perfil </MenuItem>
          <SubMenu label="Configuración">
            <MenuItem> Account </MenuItem>
            <MenuItem> Privacy </MenuItem>
            <MenuItem> Notifications </MenuItem>
          </SubMenu>
          <MenuItem> Cerrar Sesión </MenuItem>
        </Menu>
      </Sidebar>
      <section className="elements-container">
        <Routes>
          <Route path="/" element={<Header/>}></Route>
          <Route path="/takeOrder" element={<TakeOrder/>}></Route>
          <Route path="/order" element={<Order/>}></Route>
        </Routes>
        
        <ModalOrder></ModalOrder>
        
      </section>
      
      
    </div>
  )
}

export default App
