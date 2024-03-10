import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Account/Login.jsx";
import Register from "./components/Account/Register.jsx";


const Accounts = () => {
    return (
        <Routes>
            <Route path='/login' element={ <Login /> } />
            <Route path="/register" element={ <Register/> }/>
        </Routes>
    )
}

export default Accounts
