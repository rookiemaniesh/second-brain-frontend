import React from 'react'
import DashBoard from './pages/Dashboard'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/dashboard' element={<DashBoard/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
  </Routes>

   </BrowserRouter> 
}

export default App
