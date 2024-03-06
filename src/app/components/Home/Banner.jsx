import React from 'react';
import '../../../assets/css/home.css'
import yogaImage from '../../../assets/images/yoga-therapy-man.png'
import Navbar from '../nav/Navbar';
import Map from '../Map/Map';

const Banner = () => {
    return (
        <div className='yekan container'>
            <Navbar />
            <hr className="border-t-1 border-gray-300 border-opacity-50" />

            <div className="Banner flex justify-between bg-blue-600 text-white rounded-2xl py-3 px-5 mt-4 relative">
                {/* banner image */}
                <div className="bannerImage">
                    <img src={yogaImage} alt="yoga-man" className='w-[180px]' />
                    {/* <div className="shadow1 absolute bg-sky-600/25 w-[180px] -bottom-3  h-3 rounded-t-none rounded-lg"></div>
                    <div className="shadow2 absolute bg-sky-100 w-[150px] h-3 -bottom-6 rounded-t-none rounded-lg"></div> */}
                </div>
                {/* text for the banner */}
                <div className="bannerContent text-right">
                    <a href="/">
                        <h1 className='text-2xl yekanBold'>برنامه دلخواه خودت رو به سادگی بساز</h1>
                    </a>
                    <a href="#"><p className='text-[12px] my-2'>آموزش و تغذیه</p></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
