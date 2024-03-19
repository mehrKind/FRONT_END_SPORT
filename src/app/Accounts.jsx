import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Account/Login.jsx";
import Register from "./components/Account/Register.jsx";
import ForgetPassEmail from "./components/Account/ForgetPassEmail.jsx";
import CodeRecovery from "./components/Account/CodeRecovery.jsx";

const Accounts = () => {
    return (
        <Routes>
            <Route path='/login' element={ <Login /> } />
            <Route path="/register" element={ <Register/> }/>
            <Route path="/forget-password" element={ <ForgetPassEmail/> }/>
            <Route path="/code_recovery" element={ <CodeRecovery/> }/>
        </Routes>
    )
}

export default Accounts
