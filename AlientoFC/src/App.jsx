import './App.css'
import { Navbar } from './components/Navbar'
import { TablePlayers } from './components/TablePlayers'
import { ActionButtons } from './components/ActionButtons'
import { players as initialPlayers } from "./mocks/players.json";
import { useEffect, useState } from 'react';
import { FormAddPlayer } from './components/FormAddPlayer';
import { PopUpDelete } from './components/PopUpDelete';
import { FormEditPlayer } from './components/FormEditPlayer';
import { Routes, Route } from 'react-router';
import { TeamMaker } from './components/TeamMaker';


function App() {

  const [players, setPlayers] =  useState(initialPlayers)
  const [popUp, setPopUp] = useState(false)
  const [popUpDelete, setPopUpDelete] = useState(false)
  const [popUpEdit, setPopUpEdit] = useState(false)
  const [idPlayerToDelete, setIdPlayerToDelete] = useState(-1)
  const [idPlayerToEdit, setIdPlayerToEdit] = useState(-1)

  const handleRemovePlayer = (id) => {
    const updatedPlayers = players.filter((player) => player.id !== id)
    setPlayers(updatedPlayers)
  }

  const activatePopUpDelete = (id) => {
    setIdPlayerToDelete(id)
    setPopUpDelete(true)
  }

  const activatePopUpEdit = (id) => {
    setIdPlayerToEdit(id)
    setPopUpEdit(true)
  }
  
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <section className='section-container'>
        <Routes>
          <Route path="/" element={<TablePlayers players={players} 
            activatePopUpDelete={activatePopUpDelete} 
            activatePopUpEdit={activatePopUpEdit} 
            setPopUp={setPopUp}></TablePlayers>}>
          </Route>
          <Route path="/armado" element={<TeamMaker></TeamMaker>}></Route>
        </Routes>
        
        <FormAddPlayer popUp={popUp} setPopUp={setPopUp} setPlayers={setPlayers} players={players}></FormAddPlayer>
        <PopUpDelete popUp={popUpDelete} setPopUp={setPopUpDelete} id={idPlayerToDelete} players={players} handleRemovePlayer={handleRemovePlayer}></PopUpDelete>
        <FormEditPlayer popUp={popUpEdit} setPopUp={setPopUpEdit} setPlayers={setPlayers} players={players} id={idPlayerToEdit}></FormEditPlayer>
      </section>
    </div>
  )
}

export default App
