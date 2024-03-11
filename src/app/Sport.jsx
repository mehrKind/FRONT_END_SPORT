import React from 'react'
import Navbar from './components/nav/Navbar'
import { Routes, Route } from 'react-router-dom';
import Cycling from './components/Sport/Cycling';
import RunGame from './components/Sport/RunGame'
import Running from "./components/Sport/Running.jsx";
import StartCycle from "./components/Sport/StartCycle.jsx";

const Sport = () => {
  return (
    <Routes>
        <Route path='/cycling' element={ <Cycling/> } />
        <Route path='/run-game' element={ <RunGame/> } />
        <Route path='/running' element={ <Running/> }/>
        <Route path="/start-cycle" element={ <StartCycle/> }/>
    </Routes>
  )
}

export default Sport
