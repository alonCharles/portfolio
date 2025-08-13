import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Expenses from './pages/Expenses'
import About from './pages/About'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/expenses' element={<Expenses/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
