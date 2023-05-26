import './App.css'
import { Navbar } from './components/Navbar'
import { Aside } from './components/Aside'
import { Players } from './components/Players'


function App() {

  return (
    <div className="app-container">
      <Navbar></Navbar>
      <section className='section-container'>
        <Aside></Aside>
        <Players></Players>
      </section>
      
    </div>
  )
}

export default App
