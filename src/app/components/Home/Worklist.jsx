import React from 'react'
import { IoBicycleOutline, IoTennisballOutline } from "react-icons/io5";
import { PiPersonSimpleRunDuotone } from "react-icons/pi";
import { IoIosFootball } from "react-icons/io";
import { TbSwimming } from "react-icons/tb";
import { CiMountain1 } from "react-icons/ci";
import Slider from "react-slick";


const Worklist = () => {
    // slider setting for list of works
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        pauseOnFocuse: true
    };

    return (
        <div className='mt-6 container yekan '>
            <h2 className='text-right text-[1.2rem]'>امروز میخوای چیکار کنی؟</h2>
            <div className="workCards container mt-5">
                <Slider {...settings}>
                    <div>
                        <div className="grid grid-cols-3 gap-3 p-2">
                            <a href="/sports/running" className='group'>
                                <div className="workCard bg-white group-hover:bg-blue-700 transition-all duration-200 py-3 px-5 block text-center align-middle rounded-lg shadow-md border-solid border-[.5px] border-gray-200/65 text-black group-hover:text-white">
                                    <span className='flex justify-center items-center mb-1 transition-all duration-200'><PiPersonSimpleRunDuotone className='text-4xl text-green-400 group-hover:text-white' /></span>
                                    <p className='yekanMed'>دویدن</p>
                                </div>
                            </a>
                            <a href="/sports/cycling" className='group'>
                                <div className="workCard bg-white group-hover:bg-blue-700 transition-all duration-200 py-3 px-5 block text-center align-middle rounded-lg shadow-md border-solid border-[.5px] border-gray-200/65 text-black group-hover:text-white">
                                    <span className='flex justify-center items-center mb-1 transition-all duration-200'><IoBicycleOutline className='text-4xl text-pink-400 group-hover:text-white' /></span>
                                    <p className='yekanMed'>دوچرخه</p>
                                </div>
                            </a>
                            <a href="#" className='group'>
                                <div className="workCard bg-white group-hover:bg-blue-700 transition-all duration-200 py-3 px-5 block text-center align-middle  shadow-md border-solid border-[.5px] border-gray-200/65 text-black group-hover:text-white rounded-lg">
                                    <span className='flex justify-center items-center mb-1 transition-all duration-200'><TbSwimming className='text-4xl text-blue-400 group-hover:text-white' /></span>
                                    <p className='yekanMed'>شنا</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>


                        <div className="grid grid-cols-3 gap-3 p-2">
                            <a href="#" className='group'>
                                <div className="workCard bg-white group-hover:bg-blue-700 transition-all duration-200 py-3 px-5 block text-center align-middle rounded-lg shadow-md border-solid border-[.5px] border-gray-200/65 text-black group-hover:text-white">
                                    <span className='flex justify-center items-center mb-1 transition-all duration-200'><IoIosFootball className='text-4xl text-orange-300 group-hover:text-white' /></span>
                                    <p className='yekanMed'>فوتبال</p>
                                </div>
                            </a>

                            <a href="#">
                                <div className="workCard bg-white hover:bg-blue-700 transition-all duration-200  py-3 px-5 block text-center align-middle rounded-lg shadow-md border-solid border-[.5px] border-gray-200/65">
                                    <span className='flex justify-center items-center mb-1'><CiMountain1 className='text-4xl text-blue-400' /></span>
                                    <p className='yekanMed'>کوهنوردی</p>
                                </div>
                            </a>
                            <a href="#">
                                <div className="workCard bg-white hover:bg-blue-700 transition-all duration-200  py-3 px-5 block text-center align-middle rounded-lg shadow-md border-solid border-[.5px] border-gray-200/65">
                                    <span className='flex justify-center items-center mb-1'><IoTennisballOutline className='text-4xl text-[#34d399]' /></span>
                                    <p className='yekanMed'>تنیس</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </Slider>

            </div>
        </div>
    )
}

export default Worklist
