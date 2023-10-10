import { useParams } from 'react-router'

export const Movie = () => {
  const { id } = useParams()
  return (
    <>
    <h1>Movie</h1>
    <p>Você está na página de ID: {id}</p>
    </>
  )
}
