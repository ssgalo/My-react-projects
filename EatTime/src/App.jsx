import { Fragment, useState } from 'react'
import { Header } from './components/Header';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';
import { TakeOrder } from './components/TakeOrder';



const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-nav p-3">
        <a className="navbar-brand title-navbar" href="#">CircoEats</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Realizá tu pedido</a>
            <a className="nav-item nav-link" href="#">Ver pedidos</a>
          </div>
        </div>
      </nav>
  )
}

const Formulario = () => {

  const [nombreUsuario, setNombreUsuario] = useState('');
  const [comida, setComida ] = useState('');
  const [pedidos, setPedidos] = useState([]);

  const handleUsuario = (event) =>{
    setNombreUsuario(event.target.value);
  }

  const handleComida = (event) =>{
    setComida(event.target.value);
  }

  const agregarPedido = (event) =>{
    event.preventDefault();
    const pedidoAAgregar = {
      usuario: nombreUsuario,
      comida:comida
    }

    setPedidos(pedidos.concat(pedidoAAgregar));
    setNombreUsuario('');
    setComida('');
    console.log(pedidos);
  }

  const handleBorrar = () => {
    setPedidos([]);
  }

  return (
    <div>
      <div className="container py-5 form-container">
      <form onSubmit={agregarPedido}>
        <div className="form-group">
          <label for="formGroupExampleInput">Quien pide</label>
          <input onChange={handleUsuario} type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" value={nombreUsuario}/>
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Comida</label>
          <input onChange={handleComida} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" value={comida}/>
        </div>
        
        <button type="submit" class="btn btn-primary mt-2">Pedir</button>
      </form>

      <button onClick={handleBorrar} class="btn btn-primary mt-2 d-block">Borrar todo</button>
    </div>
    <Pedidos pedidos={pedidos}/>
    </div>
  )
}

const Pedido = ({usuario, comida}) => {
  return (
    <li>
      <p>{usuario}</p>
      <p>{comida}</p>
    </li>
  )
}

const Pedidos = (props) =>{
  const {pedidos} = props;

  return (
    <div className="container">
      <ol>
        {pedidos.map( pedido => (
          <Pedido {...pedido}/>
        ) )}
      </ol>
    </div>
  )
}

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
