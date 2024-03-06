import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Account/Login.jsx";


const Accounts = () => {
    return (
        <Routes>
            <Route path='/login' element={ <Login /> } />
        </Routes>
    )
}

export default Accounts
