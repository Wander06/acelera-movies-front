import { useEffect, useState } from 'react'
import { HomeStyle } from './styled-home'
import axios from 'axios'
import { StarComponent } from '../stars/star-component'

export const HomeComponent = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/movies').then((response) => {
      console.log(response.data[0].releaseDate)
      const formattedMovies = response.data.map(movie => {
        const releaseDate = new Date(movie.releaseDate)
        const options = { day: '2-digit', month: 'long', year: 'numeric' }
        const formattedDate = releaseDate.toLocaleString('en-IN', options)
        return { ...movie, releaseDate: formattedDate }
      })
      const sortedMovies = formattedMovies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
      const limitedMovies = sortedMovies.slice(0, 10)
      setMovies(limitedMovies)
    }).catch((error) => {
      console.error('Erro ao requisitar dados do endPoint: ' + error)
    })
  }, [])

  return (
    <HomeStyle>
      <aside className='homeAside'>
        <header>
          <h2>Hello, User!</h2>
        </header>
        <section>
          <h3>Add movie</h3>
        </section>
      </aside>
      <section className='homeSection'>
        <header>
          <h1>All Movies</h1>
        </header>
        <div className='containerCards'>
          {movies.map(movie =>
            <article className='movieCards' key={movie.id}>
              <img src={movie.image}/>
              <div>
                <h3 className='title'>{movie.title}</h3>
                <p className='date'><strong>Data:</strong> {movie.releaseDate}</p>
                <h4 className='titleResume'>Resumo:</h4>
                <p className='resume'>{movie.resume}</p>
              </div>
                <StarComponent rating={movie.note}/>
            </article>
          )}
        </div>
      </section>
    </HomeStyle>
  )
}
