import './App.css'
import { Navbar } from './components/Navbar'
import { Aside } from './components/Aside'
import { Players } from './components/Players'
import { TablePlayers } from './components/TablePlayers'

function App() {

  return (
    <div className="app-container">
      <Navbar></Navbar>
      <section className='section-container'>
        <TablePlayers></TablePlayers>
      </section>
      
    </div>
  )
}

export default App
