import React from "react"
import NavbarPage from "./components/nav/NavbarPage.jsx";
import ProfileInfo from "./components/Profile/ProfileInfo.jsx";

const Profile = ()=>{
    return (
        <div>
            <NavbarPage PageName="پروفایل" PageDesc="ویرایش / مشاهده"/>
            <ProfileInfo/>
        </div>
    )
}

export default Profile;