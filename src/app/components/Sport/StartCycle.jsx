import React from 'react'
import NavbarPage from "../nav/NavbarPage.jsx";
import { AiOutlineFire } from "react-icons/ai";
import { CiMountain1 } from "react-icons/ci";
import { PiHeartbeat } from "react-icons/pi";
import { PiTimer } from "react-icons/pi";

const StartCycle = ()=>{
    navigator.geolocation.getCurrentPosition(
        position => {
            console.log(position);
        },
        error => {
            console.log(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    return (
        <div className="container yekan">
            <NavbarPage PageName="دوچرخه سواری" PageDesc="درحال سفر به خیابان شهید چمران" />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.140371863772!2d52.48841507487597!3d29.657700775120674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb21198e13acded%3A0x2af8c65101a278de!2sFars%20Province%2C%20Shiraz%2C%20Chamran%20Blvd%2C%20Iran!5e0!3m2!1sen!2s!4v1710147616492!5m2!1sen!2s"
                className="w-full h-[500px] mt-5 border-none"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className="cycleDetailShow mt-5 h-full flex items-center">
                <div className="flex-cols bg-blue-500 p-3 rounded-3xl w-[33%] relative">
                    <AiOutlineFire className='text-[2.5rem] text-white mb-20'/>
                    <div className="circle1 absolute w-[100px] h-[100px] rounded-full bg-white/10 -top-5 -left-5"></div>
                    <div className="circle1 absolute w-[120px] h-[120px] rounded-full bg-white/10 -top-5 -left-4"></div>
                    <div className="text-white yekanBold text-right p-2">
                        <h2 className="text-[1.3rem]">560</h2>
                        <p className="yekan">کالری</p>
                    </div>
                </div>
                <div className="flex-cols bg-gray-100 p-3 rounded-3xl w-[33%] mx-3">
                    <PiHeartbeat className='text-[2.5rem] text-gray-400 mb-20'/>
                    <div className="text-white yekanBold text-right p-2">
                        <h2 className="text-[1.3rem] text-gray-500">125</h2>
                        <p className="text-gray-400 yekan text-[13px]">ضربان قلب</p>
                    </div>
                </div>
                <div className="flex-cols bg-gray-100 p-3 rounded-3xl w-[33%]">
                    <PiTimer className='text-[2.5rem] text-gray-400 mb-20'/>
                    <div className="text-white yekanBold text-right p-2">
                        <h2 className="text-[1.3rem] text-gray-500">30</h2>
                        <p className="text-gray-400 yekan text-[13px]"> تا مقصد</p>
                    </div>
                </div>
            </div>


        </div>
    )
};
export default StartCycle;
