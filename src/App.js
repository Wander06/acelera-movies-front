import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/login/login'
import { Home } from './pages/home/home'
import { Movie } from './pages/movie/movie'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} exact />
        <Route path="/home" element={<Home/>} exact />
        <Route path="/movie/:id" element={<Movie/>} exact />
      </Routes>
    </BrowserRouter>
  )
}
