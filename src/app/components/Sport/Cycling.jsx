import React from 'react'
import Navbar from '../nav/Navbar'
import Habits from '../Home/Habits'
import CycleInfo from './CycleInfo'
import Worklist from '../Home/Worklist'
import NavbarPage from "../nav/NavbarPage.jsx";

const Cycling = () => {
    return (
        <div className="container yekan">
            <NavbarPage PageName="فعالیت در حال انجام" PageDesc="دوچرخه سواری"/>
        </div>
    )
}

export default Cycling;
