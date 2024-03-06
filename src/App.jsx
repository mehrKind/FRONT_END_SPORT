import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './app/Home'; // App => Home
import Sport from './app/Sport';
import Profile from "./app/Profile.jsx";
import Contact from "./app/Contact.jsx";
import Accounts from "./app/Accounts.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sports/*' element={<Sport />} />
        <Route path='profile/*' element={<Profile />}/>
        <Route path='contact/*' element={<Contact />}></Route>
        <Route path='accounts/*' element={<Accounts />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
