import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const RouteDefinitions = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
  )
}

export default RouteDefinitions