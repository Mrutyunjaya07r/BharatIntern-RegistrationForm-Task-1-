import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './Signin'
import Signup from './Signup'
import Home from './Home'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/' element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
