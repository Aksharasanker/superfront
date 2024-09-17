

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import UserDash from './path/UserDash'
import Auth from './path/Auth'
import Home from './path/Home'
import Admin from './path/Admin'
import { useContext } from "react"
import { isPersonContext } from "./Context/Context"
import Dashboard from './path/Dashboard'
import Greviance from './path/Greviance'
import Header from './components/Header'

function App() {
  const {isPerson}=useContext(isPersonContext)

  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signin' element={<Auth/>} />
      <Route path='/signup' element={<Auth signup/>} />
      <Route path='/greviance' element={<Greviance/>} />
      <Route path='/dashboard' element={isPerson?<Dashboard dashboard={true}/>:<Home/>}/>
      <Route path='/user' element={<UserDash/>} />
      <Route path='/admin' element={<Admin/>}/>
    
    </Routes>
    <Footer/>
    </>
  )
}

export default App
