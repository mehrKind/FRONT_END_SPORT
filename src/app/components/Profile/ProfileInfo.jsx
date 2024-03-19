import React, { useState, useEffect } from 'react';
import { MdModeEdit } from "react-icons/md";
import UserSummery from "./UserSummery.jsx";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import {port, Host} from "../../config.jsx";

// localStorage.removeItem("access_token")

const ProfileInfo = ()=>{
    const [userInfo, setUserInfo] = useState(null);
    const [userProfile, setUserProfile] = useState(null)
    // get user data
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
            console.log("user profile can't load");
            console.log(`error: ${error}`)
        }
    };

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
            console.log("some thing went wrong. try again later")
        }
    }

    useEffect(() => {
        fetchUserInfo();
        fetchUserProfile()
    }, []);

    return (
        <div className="container yekan mt-8">
            {/* user profile */}
            <div className="ProfileImage flex justify-center relative">
                <img src={userProfile ? userProfile.profileImage : 'profile-image'} alt="User Profile" className='rounded-full w-[150px] h-[150px]' />
                <a href="#" className="EditBtn absolute bottom-2 left-[8rem] border-[2px] border-white bg-blue-500 p-2 rounded-full">
                    {/* edit Button */}
                    <div>
                        <FaCamera className="text-[0.9rem] text-white"/>
                    </div>
                </a>
            </div>
            {/* user information */}
            <div className="profileContent text-center mt-5">
                <h3 className="yekanBold text-2xl flex justify-center items-center"> <MdModeEdit className="text-gray-400 text-[20px] mr-1"/> {userInfo ? `${userInfo.first_name} ${userInfo.last_name}` : 'loading ...'}</h3>
                <p className="text-gray-400 mt-2 flex justify-center items-center"><MdModeEdit className="text-gray-400 text-[17x] mr-1"/>{userProfile ? userProfile.phoneNumber : ''}</p>
                <p className="text-red-500">{userProfile ? userProfile.gender : 'loading your gender'}</p>
            </div>
            {/* user summery and days */}
            <UserSummery/>
        </div>
    )
}

export default ProfileInfo;