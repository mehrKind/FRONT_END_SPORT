import React from 'react'
import { GoGoal } from "react-icons/go";
import { GiFruitBowl } from "react-icons/gi";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GiStairsGoal } from "react-icons/gi";
import { useLocation } from 'react-router-dom';
import { MdReport } from "react-icons/md";


const Habits = () => {
    const location = useLocation();
    return (
        <div className='container yekan'>
            <div className="habitPart mt-6">
                <h2 className='text-right text-[1.2rem]'>عادت های شما</h2>
                <div className="habitCard">
                    <div className="grid grid-cols-2 mt-3 gap-4" style={{ direction: 'rtl' }}>
                        {/* goal part */}
                        <div className="GoalsCard bg-white flex flex-col shadow-md border-[.5px] p-3 rounded-xl">
                            <GoGoal className='text-5xl text-red-600' />
                            <h5 className='text-[1.2rem] text-right mt-6'>هدف ها</h5>
                            <p className='text-[14px] text-gray-400 text-right mt-1'>73% تکمیل شده</p>
                        </div>
                        {/* food (nutrition) part*/}
                        <div className="FoodCard bg-white flex flex-col shadow-md border-[.5px] p-3 rounded-xl">
                            <GiFruitBowl className='text-5xl text-green-500' />
                            <h5 className='text-[1.2rem] text-right mt-6'>مواد غذایی</h5>
                            <p className='text-[14px] text-gray-400 text-right mt-1'>3 ساعت رژیم</p>
                        </div>
                        {/* challenge part */}
                        {
                            location.pathname != "/" && (
                                <>
                                    <div className="FoodCard bg-white flex flex-col shadow-md border-[.5px] p-3 rounded-xl">
                                        <GiStairsGoal className='text-5xl text-yellow-400' />
                                        <h5 className='text-[1.2rem] text-right mt-6'>چالش ها</h5>
                                        <p className='text-[14px] text-gray-400 text-right mt-1'>64% تکمیل شده</p>
                                    </div>
                                    {/* daily part show if the rout is not '/' (we are not in a home page) */}
                                    <a href="/">
                                        <div className="DailyReport bg-white flex flex-col shadow-md border-[.5px] p-3 rounded-xl">
                                            <MdReport className='text-5xl text-blue-500' />
                                            <h5 className='text-[1.2rem] text-right mt-6'>گزارش روزانه</h5>
                                            <p className='text-[14px] text-gray-400 text-right mt-1'>تمام جزئیات کار شما</p>
                                        </div>
                                    </a>
                                </>
                            )}
                    </div>
                </div>
            </div>
            {/* daily report if we are in the home page */}
            {
                location.pathname == "/" && (
                    <div className="DailyReport mt-8 flex justify-between bg-white rounded-lg shadow-md border-[.5px] mb-5 py-5 px-4 items-center">
                        <div className="EnterArrowDaily">
                            <div className="arrowRight border-[.5px] border-solid border-blue-500 rounded-xl p-[5px] group hover:bg-blue-500 transition-all duration-200">
                                <a href="#"><FaArrowLeft className='text-blue-500  text-xl hover:text-white transition-all duration-200' /></a>
                            </div>
                        </div>

                        <div className="DailyContent">
                            <h2 className='text-right text-[1.2rem]'>گزارش روزانه</h2>
                            <p className='text-gray-400 text-[12px] mt-2'>تمام جزئیات کار شما در یک قاب</p>
                        </div>
                    </div>
                )
            }


        </div>
    )
}

export default Habits
