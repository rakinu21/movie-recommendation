
import './App.css'
import { MovieCards } from './components/MovieCards'
import { Navbar } from './components/Navbar'
import { Favorite } from './pages/Favorite'
import { Home } from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'

function App() {


  return (
    <MovieProvider className='app-content'>

     <Navbar/>
     <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
      </Routes>
    
     </main>

      </MovieProvider>
  )
}

export default App
