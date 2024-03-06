import React from 'react'
import Navbar from './components/nav/Navbar'
import { Routes, Route } from 'react-router-dom';
import Cycling from './components/Sport/Cycling';

const Sport = () => {
  return (
    <Routes>
        <Route path='/cycling' element={ <Cycling/> } />
    </Routes>
  )
}

export default Sport
