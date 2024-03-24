import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install this package
import { RiMenu2Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FiX } from 'react-icons/fi';
import { IoExitOutline, IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { PieChart } from '@mui/x-charts/PieChart';
import {port, Host} from "../../config.jsx";

// read this doc for tailwind react styles
// https://www.material-tailwind.com/docs/react/alert


const token = localStorage.getItem("access_token");
// localStorage.removeItem("access_token")
//! top Menu
const upMenu = [
  {
    id: 1,
    data: "خانه",
    link: '/'
  },
  {
    id: 2,
    data: "گزارش فعالیت",
    link: "#"
  },
  {
    id: 3,
    data: "تاریخچه فعالیت",
    link: "#"
  },
  {
    id: 4,
    data: "ارتباط با ما",
    link: "/contact",
  },
  {
    id: 5,
    data: "رژیم غذایی",
    link: "#"
  },
  {
    id: 6,
    data: "چالش ها"
  },
  {
    id: 7,
    data: "منابع",
    link: "#"
  },
  {
    id: 8,
    data: "گپ عمومی",
    link: "#"
  }
];

//! down menu
const downMenu = [
  {
    id: 1,
    data: "پروفایل",
    link: '/profile',
    icon: <CgProfile className="ml-2 text-[1.5rem]"/>
  },
  {
    id: 2,
    data: "تنظیمات",
    link: "#",
    icon: <IoSettingsOutline className="ml-2 text-[1.5rem]"/>
  }
];

if (token){
  downMenu.push(
      {
        id: 3,
        data: 'خروج',
        link: '/logout',
        icon: <IoExitOutline className="ml-2 text-[1.5rem]" />
      }
  )
}

if (!token){
  upMenu.push(
      {
        id: 8,
        data: "ورود کاربر",
        link: "/accounts/login"
      }
  )
}


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // get user information => username, password, ...
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${Host}${port}api/v1/accounts/user_info`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });

      if (response.status === 200) {
        setUserInfo(response.data[0]); // assuming the response is an array
      }
    } catch (error) {
      console.log("can't fetch user information")
    }
  };

  // get user profile information 💃🏻💃🏻💃🏻
  const fetchUserProfile = async ()=>{
    try{
      const response = await axios.get(`${Host}${port}api/v1/accounts/user_profile`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      if (response.status === 200){
        setUserProfile(response.data[0])
      }
    } catch (error){
      console.log("can't fetch user profile information")
    }
  }

  // logout user and remove the access token JWT authentication (django) from localStorage

  const logoutUser = async () => {
    try {
      const response = await axios.post(`${Host}${port}api/v1/accounts/logout/`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      if (response.status === 200){
        console.log('Status:', response.status);
        localStorage.removeItem("access_token")
      }
    } catch (error) {
      console.log("Something went wrong. Try again later");
    }
  }


  useEffect(() => {
    fetchUserInfo();
    fetchUserProfile();
  }, []);

  return (
    <div className='yekan'>
      {/* header */}
      <div className="header flex justify-between py-4 px-4">
        {/* menu & search part */}
        <div className="menu-search flex justify-between">
          <button className='-mt-5' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className='text-2xl text-gray-500' /> : <RiMenu2Line className='text-2xl text-gray-500' id='open-menu' />}
          </button>
          {isOpen && (
            <div style={{
              transition: 'all 0.5s ease'
            }}>
              <div className='absolute h-screen bg-white w-[100%] z-[999] top-20 left-0 p-10 transition-all duration-200 overflow-hidden' style={{ direction: 'rtl' }}>
                <div className="nav-links">
                  <ul className='text-gray-500 text-[1.1rem]'>
                    {/* top menu */}
                    {
                      upMenu.map((item) => {
                        return (
                          <li key={item.id}>
                            <a className='block p-2 hover:text-blue-600 hover:bg-blue-200 rounded-lg transition-all duration-200' href={item.link}>{item.data}</a>
                          </li>
                        )
                      })
                    }
                    <hr className='w-[200px] my-5' />
                    {/* down menu */}
                    {
                      downMenu.map((item) => {
                        return (
                          <li key={item.id}>
                            <a
                                className='flex items-center p-2 hover:text-blue-600 hover:bg-blue-200 rounded-lg transition-all duration-200'
                                href={item.link}
                                onClick={(event)=>{
                                  // event.preventDefault();
                                  if (item.data === "خروج"){
                                    logoutUser();
                                  }
                                }
                                }
                            >
                              {item.icon} {item.data}
                            </a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          )}
          {/* <RiCloseLine className='text-2xl'/> */}
          <span className='bg-gray-300 h-6 w-[1.5px] mx-3'></span>
          <a href="#">
            <IoIosSearch className='text-2xl text-gray-500' />
          </a>
        </div>
        {/* Profile part */}
        <div className="profile">
          <div className="grid grid-cols-2">
            <div className="profile-left text-right mr-3">
              <p className='text-gray-400'>سلام</p>
              {/* user Firstname */}
              <p className='text-black'>
                {userInfo ? `${userInfo.first_name}` : (<div className="border-[2.3px] border-blue-600 border-dashed w-[20px] h-[20px] rounded-full animate-spin relative">
                  {/*<div className="whiteLoadnig absolute bottom-0 right-0 top-0 left-0 w-[4px] h-[4px] bg-white"></div>*/}
                </div>) }
              </p>
            </div>
            {/* user profile image */}
            <div onClick={() => setIsProfileOpen(true)}>
              <img src={userProfile ? userProfile.profileImage : 'pro'} alt="User Profile" className='rounded-full w-[46px] h-[46px] cursor-pointer' />
              {/* user information popup */}
              { isProfileOpen && (
                  <div className="userProfileInformation absolute h-[100vh] bg-gray-900/20 z-[999] left-0 top-0 right-0 bottom-0">
                    <div className="userInfo flex text-center justify-center items-center h-full">
                      <div className="profile-card bg-white w-[300px] flex-column justify-center text-center items-center p-5 rounded-lg shadow-lg">
                        {/* close button */}
                        <div className="closeProfile text-right text-2xl text-gray-500">
                          <button onClick={(e) => {
                            e.stopPropagation();
                            setIsProfileOpen(false);
                          }}> <FiX className="hover:text-black transition-all duration-100"/> </button>
                        </div>

                        {/*<div className="user-profile flex justify-center">*/}
                        {/*  <img src={userProfile ? userProfile.profileImage : 'pro'} className="w-[200px] h-[200px] rounded-full" alt=""/>*/}
                        {/*</div>*/}
                        <p className="text-gray-700 text-lg">نمودار عملکرد</p>
                        <div className="flex justify-center items-center">
                          <PieChart
                              series={[
                                {
                                  data: [
                                    { value: 10, color: 'orange'},
                                    { value: 15, color: 'blue'},
                                    { value: 20, color: 'green' },
                                    { value: 25, color: 'red' },
                                    { value: 25, color: 'purple' },
                                    { value: 30, color: 'pink' },
                                  ],
                                  innerRadius: 40,
                                  outerRadius: 120,
                                  paddingAngle: 3,
                                  cornerRadius: 5,
                                  startAngle: -90,
                                  endAngle: 180,
                                  cx: 125,
                                  cy: 125,
                                }
                              ]}
                              height={300}
                          />
                        </div>
                        <div className="chart-content -mt-5 grid grid-cols-2">
                          {/* left side for the chart description */}
                          <div className="left-chart-content">
                            {/* دویدن */}
                            <div className="items-chart flex items-center justify-center">
                              <p className="item-name">دویدن</p>
                              <span className="w-[10px] h-[10px] bg-purple-700 ml-2"></span>
                            </div>
                            {/* دوچرخه */}
                            <div className="items-chart flex items-center justify-center">
                              <p className="item-name">دوچرخه</p>
                              <span className="w-[10px] h-[10px] bg-red-500 ml-2"></span>
                            </div>
                            {/* شنا */}
                            <div className="items-chart flex items-center justify-center">
                              <p className="item-name">شنا</p>
                              <span className="w-[10px] h-[10px] bg-green-700 ml-2"></span>
                            </div>
                          </div>
                          {/* right side for the chart description */}
                          <div className="right-chart-content">
                            {/* دویدن */}
                            <div className="items-chart flex items-center justify-center">
                              <p className="item-name">فوتبال</p>
                              <span className="w-[10px] h-[10px] bg-blue-600 ml-2"></span>
                            </div>
                            {/* دوچرخه */}
                            <div className="items-chart flex items-center justify-center">
                              <p className="item-name">کوهنوردی</p>
                              <span className="w-[10px] h-[10px] bg-orange-500 ml-2"></span>
                            </div>
                            {/* شنا */}
                            <div className="items-chart flex items-center justify-center">
                              <p className="item-name">تنیس</p>
                              <span className="w-[10px] h-[10px] bg-pink-200 ml-2"></span>
                            </div>
                          </div>
                        </div>
                        <hr className="my-3"/>
                        <div className="content mt-5">
                          <p className="text-gray-500">{userInfo ? `${userInfo.first_name} ${userInfo.last_name}` : 'loading'}</p>
                          <div className="level grid grid-cols-2 mt-3 items-center">
                            <div className="progressTemplate w-full h-[8px] bg-gray-300 rounded-full relative">
                              <div className="progress_percent absolute bg-blue-500 left-0 h-[8px] w-[50%] rounded"></div>
                            </div>
                            <p style={{direction:"rtl"}}>پیشرفت: 50%</p>
                          </div>
                          <div className="level grid grid-cols-2 mt-3 items-center">
                            <div className="progressTemplate w-full h-[8px] bg-gray-300 rounded-full relative">
                              <div className="progress_percent absolute bg-green-500 left-0 h-[8px] w-[65%] rounded"></div>
                            </div>
                            <p style={{direction:"rtl"}}>امتیاز 100 / 65</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ) }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
