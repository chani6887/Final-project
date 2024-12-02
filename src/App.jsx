
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './comp/Login'
import Welcome from './comp/Welcome'
import Singup from './comp/Singup'

function App() {


  return (
    <>
    
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/singup' element={<Singup />}></Route>
        <Route path='/' element={<Welcome />}></Route>
      </Routes>
     
    </>
  )
}

export default App
