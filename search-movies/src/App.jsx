import { useEffect, useRef, useState, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'

const API_KEY = "4b414285"

function useMovies({search}){

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    // search es ''

    try {
      setLoading(true)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      console.log(e)
    } finally {
      // tanto en el try como en el catch
      setLoading(false)
    }
  }, [])
  
  return { movies, getMovies, loading }
}

const searchMovies = async ({search}) => {
  if(search === '') return null

  try{
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
    const json = await response.json()

    const movies = json.search
    
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch(e) {
    throw new Error('Error searching movies')
  }
}

function App() {

  const [search, setSearch] = useState("")
  const {movies, loading, getMovies} = useMovies({search})
  const [error, setError] = useState("")
  const isFirstInput = useRef(true)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(search === '') return null
    getMovies({search})
  }

  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return;
    }
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return (
    <>
    <header className='header-container'>
      <h1>Busca tu película</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder='The Avengers, Matrix, Spiderman...'/>
        <button>Buscar</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
    </header>
    <main className='list-movies-container'>
      { 
        loading ? <p>Cargando...</p> : <Movies movies={movies}></Movies>
      } 
    </main>
      
    </>
  )
}

export default App
