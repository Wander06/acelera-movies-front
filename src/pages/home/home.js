// import { Link } from 'react-router-dom'

import { HomeComponent } from '../../components/home/home-component'

export const Home = () => {
  // const list = [
  //   { id: 1, name: 'Movie 1' },
  //   { id: 2, name: 'Movie 2' },
  //   { id: 3, name: 'Movie 3' }
  // ]
  // return (
  //   <>
  //   <h1>Home</h1>
  //   <ul>
  //   { list.map((element) => (
  //     <li key={element.id}>
  //       <Link to={`/movie/${element.id}`}>{element.name}</Link>
  //     </li>
  //   ))}
  //   </ul>
  //   </>
  // )
  return (
    <>
      <HomeComponent/>
    </>
  )
}
