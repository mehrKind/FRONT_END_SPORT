import React from 'react'
import NavbarPage from "../nav/NavbarPage.jsx";
import { CiCalendar } from "react-icons/ci";

const RunGame = () => {
    const today = new Date().toLocaleDateString('fa-IR');
    return (
        <div className="container yekan">
            <NavbarPage PageName="فعالیت در حال انجام" PageDesc="دویدن"/>
            <h1 className="text-right text-[1.3rem] mt-4 mb-2">از روتین دویدن خودت لذت ببر</h1>
            <div className="showDate flex items-center" style={{direction:"rtl"}}>
                <CiCalendar className="text-2xl ml-1 text-gray-500"/>
                <p className="text-gray-500 text-[16px]">امروز {today}</p>
            </div>

        </div>
    )
}

export default RunGame;