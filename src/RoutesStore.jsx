import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'

import { Colection } from './Pages/Colection/Colection'
export const RoutesStore = () => {
  return (
    <Router>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Colection' element={<Colection />} />
            <Route path='/Bazar' element={<Bazar />} />
            <Route path='/Stores' element={<Stores />} />
            <Route path='/' element={<Off />} />


         </Routes>
    </Router>
  )
}
