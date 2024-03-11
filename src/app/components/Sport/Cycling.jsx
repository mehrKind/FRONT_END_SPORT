import React from 'react'
import NavbarPage from "../nav/NavbarPage.jsx";
import {CiCalendar} from "react-icons/ci";
import cycleBG from '../../../assets/images/sportbg.jpg'
import { IoPlayOutline, IoSpeedometerOutline } from "react-icons/io5";
import { TbRoad } from "react-icons/tb";
import { TfiAlarmClock } from "react-icons/tfi";
import { IoIosArrowBack } from "react-icons/io";
import PopulerRouts from "./PopulerRouts.jsx";

const Cycling = () => {
    const today = new Date().toLocaleDateString('fa-IR');
    return (
        <div className="container yekan">
            <NavbarPage PageName="فعالیت در حال انجام" PageDesc="دوچرخه سواری"/>
            <h1 className="text-right text-[1.3rem] mt-4 mb-2">از روتین دوچرخه سواری لذت ببر</h1>
            <div className="showDate flex items-center" style={{direction:"rtl"}}>
                <CiCalendar className="text-2xl ml-1 text-gray-500"/>
                <p className="text-gray-500 text-[16px]">امروز {today}</p>
            </div>

            {/* background part */}
            <div className="runStart w-[100%] h-[330px] bg-cover bg-no-repeat relative mt-5 rounded-[40px] grid grid-cols-2" style={{backgroundImage: `url(${cycleBG})`}}>
                <div className="startButton bg-white absolute p-4 rounded-bl-[40px] right-0 -top-0 border-l-2 border-b-2 border-gray-400">
                    <div className="start_btn bg-gray-600 p-3 rounded-xl flex items-center justify-center">
                        <a href="/sports/start-cycle" className=""> <IoPlayOutline className="text-white text-4xl"/> </a>
                    </div>
                </div>
                {/*  left side */}
                <div className="run-leftSide text-center">
                    <div className="run-card bg-white/75 rounded-md grid grid-cols-2 m-5 p-3">
                        <TbRoad className="text-4xl"/>
                        <div className="card-details">
                            <p>15 Km</p>
                            <p className="text-gray-600">مسیر</p>
                        </div>
                    </div>
                    <div className="run-card bg-white/75 rounded-md grid grid-cols-2 m-5 mt-6 p-3">
                        <IoSpeedometerOutline className="text-4xl"/>
                        <div className="card-details">
                            <p>5 Km/h</p>
                            <p className="text-gray-600">سرعت</p>
                        </div>
                    </div>
                    <div className="run-card bg-white/75 rounded-md grid grid-cols-2 m-5 mt-6 ml-5 p-3 ye">
                        <TfiAlarmClock className="text-4xl"/>
                        <div className="card-details">
                            <p className="text-[14px]">3h 55min</p>
                            <p className="text-gray-600">زمان</p>
                        </div>
                    </div>
                </div>
                {/*  right side  */}
                <div className=""></div>
                <div className="lastTrip absolute bottom-12 right-4 text-right yekanBold text-white text-xl">
                    <p>:آخرین سفر شما</p>
                    <p>خیابان آوینی</p>
                </div>
            </div>

            <hr className="my-5 border-[1.1px] border-gray-300"/>
            <div className="populerRouts flex justify-between mb-4">
                <a href="#" className="text-blue-500 flex items-center"><IoIosArrowBack className="mr-1"/> مشاهده همه</a>
                <h2 className="text-right text-[1.2rem]">مسیرهای مشهور</h2>
            </div>
            {/* poppular components */}
            <PopulerRouts/>

        </div>
    )
}

export default Cycling;
