/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function ListOfMovies ({ movies }) {
    return (
      <ul className='movies'>
        {
          // eslint-disable-next-line react/prop-types
          movies.map(movie => (
            <li className='movie' key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.image} alt={movie.title} />
            </li>
          ))
        }
      </ul> 
    )
  }
  
  function NoMoviesResults () {
    return (
      <p>No se encontraron películas para esta búsqueda</p>
    )
  }
  
  export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0
    
    return (
      hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResults />
    )
  }