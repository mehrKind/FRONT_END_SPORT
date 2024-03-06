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
        </div>
    )
}

export default Cycling
