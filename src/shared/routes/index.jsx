import React from 'react'
import { Home } from '../../pages/Home'
import { Profile } from '../..//pages/Profile'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export { AppRoutes }