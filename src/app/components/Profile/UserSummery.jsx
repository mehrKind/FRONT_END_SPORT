import React from "react"
import { BiTimeFive } from "react-icons/bi";
import { ImFire } from "react-icons/im";
import { MdDoneOutline } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
//

const UserSummery = ()=>{
    return (
        <div className="container mt-7">
            {/* information */}
            <div className="grid grid-cols-3 text-center">
                <div className="summeryCart">
                    <div className="SummeryImage flex justify-center">
                        <BiTimeFive className="text-5xl text-blue-900" />
                    </div>
                    <div className="SummeryContent mt-2" style={{direction:"rtl"}}>
                        <p className="text-[20px]">2h 35m</p>
                        <p className="text-gray-500 text-[14px]">زمان کل</p>
                    </div>
                </div>
                {/* Calery */}
                <div className="summeryCart">
                    <div className="SummeryImage flex justify-center">
                        <ImFire className="text-5xl text-orange-500" />
                    </div>
                    <div className="SummeryContent mt-2">
                        <p className="text-[20px]">7200 Cal</p>
                        <p className="text-gray-500 text-[14px]">سوزانده شده</p>
                    </div>
                </div>
                {/* Done */}
                <div className="summeryCart">
                    <div className="SummeryImage flex justify-center">
                        <MdDoneOutline className="text-5xl text-green-500" />
                    </div>
                    <div className="SummeryContent mt-2" style={{direction:"rtl"}}>
                        <p className="text-[20px]">5 کار</p>
                        <p className="text-gray-500 text-[14px]">انجام شده</p>
                    </div>
                </div>
            </div>

            {/*  edit profile information  */}
            <div className="EditProfile mt-10" style={{direction:"rtl"}}>
                <form action="">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="inputFile relative mb-10">
                            <label htmlFor="name" className="bg-white absolute top-[-10px] right-[30px] px-2 text-blue-800">سن</label>
                            <input type="number" id="name" className="border-2 p-2 border-blue-800 rounded-full bg-white outline-none w-[100%] text-center" placeholder="18"/>
                        </div>
                        <div className="inputFile relative mb-10">
                            <label htmlFor="name" className="bg-white absolute top-[-10px] right-[30px] px-2 text-blue-800">قد</label>
                            <input type="number" id="name" className="border-2 p-2 border-blue-800 rounded-full bg-white outline-none w-[100%] text-center" placeholder="173"/>
                        </div>
                        <div className="inputFile relative mb-10">
                            <label htmlFor="name" className="bg-white absolute top-[-10px] right-[30px] px-2 text-blue-800">وزن</label>
                            <input type="number" id="name" className="border-2 p-2 border-blue-800 rounded-full bg-white outline-none w-[100%] text-center" placeholder="54"/>
                        </div>
                    </div>

                    <button type="button" className="flex items-center w-[100%] text-center justify-center bg-blue-600 p-3 rounded-full text-white hover:bg-blue-200 hover:text-black transition-all duration-200">ثبت اطلاعات</button>


                </form>
            </div>
        </div>
    )
}

export default UserSummery;