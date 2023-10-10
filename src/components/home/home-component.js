import { useEffect, useState } from 'react'
import { HomeStyle } from './styled-home'
import axios from 'axios'

export const HomeComponent = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/movies').then((response) => {
      setMovies(response.data)
    }).catch((error) => {
      console.error('Erro ao requisitar dados do endPoint: ' + error)
    })
  }, [])

  console.log(movies)

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
                <p className='resume'>{movie.resume + movie.resume + movie.resume}</p>
              </div>
            </article>
          )}
        {/* <article className='movieCards'>
          <img src='https://s2-g1.glbimg.com/m57QEDz9Yoc_d-NJISCmulxUTc4=/0x0:800x831/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/A/Y/AA63vlT1qduLIh6Md0TQ/unnamed-1-.jpg'/>
          <div>
            <h3 className='title'>Titulo do filme</h3>
            <p className='date'>Data: 00/00/0000</p>
            <h4 className='titleResume'>Resume:</h4>
            <p className='resume'>O que temos que ter sempre em mente é que o desenvolvimento contínuo de distintas formas de atuação afeta positivamente a correta previsão do sistema de formação de quadros que corresponde às necessidades.</p>
          </div>
        </article> */}
        </div>
      </section>
    </HomeStyle>
  )
}
