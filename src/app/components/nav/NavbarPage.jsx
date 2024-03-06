import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
// import { useHistory } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const NavbarPage = ({PageName, PageDesc})=>{
    let historyRout = useNavigate()
    return (
        <div className="yekan container flex" style={{direction:"rtl"}}>
            <div className="text-right py-2 mt-3" >
                <div onClick={ ()=>historyRout(-1) } className="backArrow cursor-pointer flex items-center text-gray-600">
                    <IoIosArrowForward className="text-4xl"/>
                    <span className='bg-gray-300 h-6 w-[1.5px] mx-3'></span>
                    <div className="Arrow-content">
                        <p className="text-[14px]">{PageName}</p>
                        <p className="text-black">{PageDesc}</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default NavbarPage;