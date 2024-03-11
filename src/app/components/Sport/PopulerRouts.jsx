import React from "react";
import { TbRouteAltLeft } from "react-icons/tb";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { PiTimer } from "react-icons/pi";
import rout1 from '../../../assets/images/Map-Overview.svg'
import rout2 from '../../../assets/images/Map-Overview2.svg'
const PopulerRouts = () =>{
    return (
        <div className="yekan">
            <div className="popularCard bg-gray-100/40 rounded-2xl mb-5 shadow-md">
                <div className="Card flex p-3 items-center" style={{direction:"rtl"}}>
                    {/* rout image */}
                    <div className="rout-img ml-5">
                        <img src={rout1} alt="rout1"/>
                    </div>
                    {/* rout name and detail */}
                    <div className="rout-detail">
                        <h2 className="text-right ">خیابان شهید چمران</h2>
                        <div className="rout-icons">
                            <div className="icon-card flex mt-2">
                                <div className="bg-white border-[1px] border-gray-200 rounded-xl flex items-center py-1 px-3">
                                    <p style={{direction:"ltr"}}>120Km</p>
                                    <TbRouteAltLeft className="text-blue-500 mr-2 text-xl"/>
                                </div>
                                <div className="bg-white border-[1px] border-gray-200 rounded-xl flex items-center py-1 px-3 mx-2">
                                    <p style={{direction:"ltr"}}>1.120m</p>
                                    <HiArrowTrendingUp className="text-green-500 mr-2 text-xl"/>
                                </div>
                                <div className="bg-white border-[1px] border-gray-200 rounded-xl flex items-center py-1 px-3">
                                    <p style={{direction:"ltr"}}>8:00h</p>
                                    <PiTimer className="text-purple-500 mr-2 text-xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="popularCard bg-gray-100/40 rounded-2xl mb-3 shadow-md">
                <div className="Card flex p-3 items-center" style={{direction:"rtl"}}>
                    {/* rout image */}
                    <div className="rout-img ml-5">
                        <img src={rout2} alt="rout1"/>
                    </div>
                    {/* rout name and detail */}
                    <div className="rout-detail">
                        <h2 className="text-right "> پیاده رو سلامت</h2>
                        <div className="rout-icons">
                            <div className="icon-card flex mt-2">
                                <div className="bg-white border-[1px] border-gray-200 rounded-xl flex items-center py-1 px-3">
                                    <p style={{direction:"ltr"}}>120Km</p>
                                    <TbRouteAltLeft className="text-blue-500 mr-2 text-xl"/>
                                </div>
                                <div className="bg-white border-[1px] border-gray-200 rounded-xl flex items-center py-1 px-3 mx-2">
                                    <p style={{direction:"ltr"}}>820m</p>
                                    <HiArrowTrendingUp className="text-green-500 mr-2 text-xl"/>
                                </div>
                                <div className="bg-white border-[1px] border-gray-200 rounded-xl flex items-center py-1 px-3">
                                    <p style={{direction:"ltr"}}>9:30h</p>
                                    <PiTimer className="text-purple-500 mr-2 text-xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="popularCard bg-gray-100/40 rounded-2xl mb-3 shadow-md">*/}
            {/*    <div className="Card flex p-3 items-center" style={{direction:"rtl"}}>*/}
            {/*        /!* rout image *!/*/}
            {/*        <div className="rout-img ml-5">*/}
            {/*            <img src={rout2} alt="rout1"/>*/}
            {/*        </div>*/}
            {/*        /!* rout name and detail *!/*/}
            {/*        <div className="rout-detail">*/}
            {/*            <h2 className="text-right ">پیاده رو مصلی نژاد</h2>*/}
            {/*            <div className="rout-icons">*/}
            {/*                <div className="icon-card flex mt-2">*/}
            {/*                    <div className="bg-white border-[1px] border-gray-200 rounded-xl flex items-center py-1 px-3">*/}
            {/*                        <p style={{direction:"ltr"}}>156Km</p>*/}
            {/*                        <TbRouteAltLeft className="text-blue-500 mr-2 text-xl"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="bg-white border-[1px] border-gray-200 rounded-xl flex items-center py-1 px-3 mx-2">*/}
            {/*                        <p style={{direction:"ltr"}}>2.120m</p>*/}
            {/*                        <HiArrowTrendingUp className="text-green-500 mr-2 text-xl"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="bg-white border-[1px] border-gray-200 rounded-xl flex items-center py-1 px-3">*/}
            {/*                        <p style={{direction:"ltr"}}>11:45h</p>*/}
            {/*                        <PiTimer className="text-purple-500 mr-2 text-xl"/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
}

export default PopulerRouts;