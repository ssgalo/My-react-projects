import { Fragment, useState } from 'react'
import { Header } from './components/Header';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';
import { TakeOrder } from './components/TakeOrder';
import { Navbar } from './components/Navbar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div style={{ display: "flex", height: "100vh" }}>  
      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1"
          component={<Link to="/"/>}
          >
            <h2 className='title-navbar'>EatTime</h2>
          </MenuItem>
          <MenuItem> Pedido Simple </MenuItem>
          <MenuItem> Carrito  </MenuItem>
          <SubMenu label="Pedidos de Equipos">
            <MenuItem> Pedir para mi equipo </MenuItem>
            <MenuItem> Pedir para otro equipo </MenuItem>
          </SubMenu>
          <SubMenu label="Restaurantes">
            <MenuItem>Asociados a la empresa</MenuItem>
            <MenuItem>Generales</MenuItem>
          </SubMenu>
          <MenuItem> Mi Perfil </MenuItem>
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
        </Routes>
      </section>
      
    </div>
  )
}

export default App
