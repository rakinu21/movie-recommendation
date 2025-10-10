
import './App.css'
import { MovieCards } from './components/MovieCards'
import { Favorite } from './pages/Favorite'
import { Home } from './pages/Home'
import {Routes, Route} from 'react-router-dom'

function App() {


  return (
     <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
      </Routes>
  
     </main>
  )
}

export default App
