import React from 'react'
import { GiWeight } from "react-icons/gi";
import { IoFootsteps } from "react-icons/io5";
import { RiHeartPulseFill } from "react-icons/ri";
import { useLocation } from 'react-router-dom';

const CycleInfo = () => {
    const location = useLocation();
    return (
        <div className='container yekan mt-5'>
            <div className="infoSection bg-gray-600 rounded-lg p-3 px-10 text-white flex justify-between">
                <div className="weightInfo">
                    {/* weight part */}
                    <div className="weightTitle flex items-center">
                        <p>وزن</p>
                        <GiWeight className='text-yellow-400 ml-2 text-[20px]' />
                    </div>
                    <div className="weightContent relative yekanBold text-[20px] mt-1">86.5 <span className='yekan text-[12px]  text-gray-300 absolute -bottom-[2px] ml-[4px]'>Kg</span></div>
                </div>

                <span className='w-[1px] bg-gray-500'></span>
                {/* step part */}
                <div className="StepInfo">
                    <div className="StepTitle flex items-center">
                        <p>قدم</p>
                        <IoFootsteps className='ml-2 text-green-500 text-[20px]' />
                    </div>
                    <div className="StepContent relative yekanBold text-[20px] mt-1">1428 <span className='yekan text-[12px]  text-gray-300 absolute -bottom-[2px] ml-[4px]'>قدم</span></div>
                </div>

                <span className='w-[1px] bg-gray-500'></span>
                {/* Heart part */}
                <div className="HeartInfo">

                    <div className="StepTitle flex items-center">
                        <p>ضربان</p>
                        <RiHeartPulseFill className='ml-2 text-red-400 text-[20px]' />
                    </div>
                    <div className="StepContent relative yekanBold text-[20px] mt-1">80 <span className='yekan text-[12px]  text-gray-300 absolute -bottom-[2px] ml-[4px]'>Bpm</span></div>
                </div>
            </div>
        </div>
    )
}

export default CycleInfo
