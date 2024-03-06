import React from 'react'
import Navbar from '../nav/Navbar'
import Habits from '../Home/Habits'
import CycleInfo from './CycleInfo'
import Worklist from '../Home/Worklist'

const Cycling = () => {
    return (
        <div className="container yekan">
            <Navbar />
            {/* <hr class="border-t-1 border-gray-300 border-opacity-50"/> */}
            <CycleInfo/>
            <Worklist/>
            <Habits/>
            <div className="spacer mb-[3rem]"></div>
            <div className="startCycle fixed flex justify-center bottom-5 z-[99] w-full left-0">
                <a href="/" className="bg-blue-600 py-2 text-white yekanBold w-[83%] hover:bg-blue-400 transition-all duration-200 cursor-pointer text-center">شروع</a>
            </div>
        </div>
    )
}

export default Cycling;
