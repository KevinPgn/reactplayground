import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/navbar'
import Home from './pages/home'
import Popup from './pages/popup'
import Todo from './pages/todo'
import EmojiFround from './pages/emoji'
import Emc from './pages/emc'
import Shop from './pages/shop'

function App() {

  return (
    <>
    <Navbar />
    <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="popup" element={<Popup />} /> 
        <Route path="todo" element={<Todo />} />
        <Route path="emoji" element={<EmojiFround />} />
        <Route path="emc" element={<Emc />} />
        <Route path="shop" element={<Shop />} />
    </Routes>
    </>
  )
}

export default App
