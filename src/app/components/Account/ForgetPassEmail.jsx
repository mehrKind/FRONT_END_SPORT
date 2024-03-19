import React, {useState} from 'react'
import NavbarPage from "../nav/NavbarPage.jsx";
import axios from "axios";
import {Host, port} from "../../config.jsx";
import {useNavigate} from "react-router-dom";


const ForgetPassEmail = ()=>{
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const fetchEmail = async ()=>{
        try {
            const response = await axios.post(Host+port+"api/v1/accounts/password_recovery/", {
                email:email
            });
            if (response.status === 200){
                navigate("/accounts/code_recovery");
            }
            else{
                console.log(response.status)
            }
        }
        catch (error){
            console.log("email not found in the database")
        }
    }


    return (
        <div className="container yekan">
            <NavbarPage/>
            <h1 className="text-right my-3 text-xl yekanBold">رمز عبور خود را فراموش کردید؟</h1>
            <p className="text-justify text-gray-500 container text-[15px]" style={{direction:"rtl"}}>
                نگران نباش! اتفاق میوفته. لطفا آدرس ایمیل مرتبط با حساب کاربری خود را وارد کنید. ما کد تایید 4 رقمی را برای شما ارسال میکنیم تا به شما کمک کنیم رمز عبور خود را بازیابی کنید.
            </p>

            <form className="mt-10">
                <input
                    type="email"
                    className="border-[1px] border-gray-300 w-full p-4 text-right rounded-lg outline-none"
                    placeholder="ایمل خود را وارد کنید"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button
                    type="button"
                    className="w-full bg-blue-500 text-center p-3 mt-5 rounded-lg text-white hover:bg-blue-300
                    transition-all duration-200"
                    onClick={fetchEmail}
                >ارسال کد</button>
            </form>
        </div>
    )
}

export default ForgetPassEmail;