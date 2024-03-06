import React from 'react'
import Navbar from './components/nav/Navbar'
import { Routes, Route } from 'react-router-dom';
import Cycling from './components/Sport/Cycling';
import RunGame from './components/Sport/RunGame'
import Running from "./components/Sport/Running.jsx";

const Sport = () => {
  return (
    <Routes>
        <Route path='/cycling' element={ <Cycling/> } />
        <Route path='/run-game' element={ <RunGame/> } />
        <Route path='/running' element={ <Running/> }/>
    </Routes>
  )
}

export default Sport
