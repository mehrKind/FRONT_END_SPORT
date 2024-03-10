import React, {useState} from 'react'
import axios from 'axios';
import RunPepole from '../../../assets/images/blueRunner.png'
import { RiAccountCircleLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import MehrAlert from "../nav/MehrAlert.jsx";
import { CiMail } from "react-icons/ci";
import { LuKeyRound } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import {Host, port} from "../../config.jsx";


const Register = ()=>{
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertStatus, setAlertStatus] = useState(false);
    const [state, setState] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        username: '',
        password: ''
    });
    const handleClose = () => {
        setShowAlert(false);
    };
    // register request api
    const handleRegister = async (event) => {
        event.preventDefault();

        // Split the full name into first and last name
        let names = state.fullName.split(' ');
        let firstName = names[0];
        let lastName = names.length > 1 ? names.slice(1).join(' ') : '';
        // Assuming you have state variables for each field in your form
        try {
            const response = await axios.post(Host + port + 'api/v1/accounts/register/', {
                first_name: firstName,
                last_name: lastName,
                phone_number: state.phoneNumber,
                email: state.email,
                username: state.username,
                password: state.password
            });

            if (response.status === 201) {
                setAlertMessage("با موفقیت ثبت نام شدید");
                setAlertStatus(true);
                setShowAlert(true);
                // localStorage.setItem('access_token', response.data.access);
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
                setTimeout(()=>{
                    navigate("/")
                }, 2000)
            } else {
                setAlertMessage(`خطای ${response.status}`);
                setAlertStatus(false);
                setShowAlert(true);
            }
        } catch (error) {
            setAlertMessage("خطا در ثبت نام");
            setAlertStatus(false);
            setShowAlert(true);
        }
    };



    return (
        <div className="yekan container">
            {showAlert && <MehrAlert title="ورود" message={alertMessage} status={alertStatus} onClose={handleClose} />}
            <div className="register-image flex justify-center">
                <img src={RunPepole} alt="" className="w-[250px]"/>
            </div>
            <h1 className="text-right text-2xl">ایجاد حساب کاربری</h1>
            <form method="POST" className="mt-5" onSubmit={handleRegister}>
                {/* get the full name (first_name abd last_name) */}
                <div className="inputText border-[1px] border-gray-300 flex py-3 px-6 rounded-[8px] mb-4" style={{direction:"rtl"}}>
                    <RiAccountCircleLine className="text-2xl text-gray-400 ml-3"/>
                    <input name="fullName" type="text" placeholder="نام و نام خانوادگی" className="outline-none border-none text-[17px] w-full"/>
                </div>
                {/* get the phoneNumber */}
                <div className="inputText border-[1px] border-gray-300 flex py-3 px-6 rounded-[8px] mb-4" style={{direction:"rtl"}}>
                    <BsTelephone className="text-2xl text-gray-400 ml-3"/>
                    <input name="phoneNumber" type="tel" placeholder="شماره تلفن" className="outline-none border-none text-[17px] text-right w-full"/>
                </div>
                {/* get the email (optional) */}
                <div className="inputText border-[1px] border-gray-300 flex py-3 px-6 rounded-[8px] mb-4" style={{direction:"rtl"}}>
                    <CiMail className="text-2xl text-gray-400 ml-3"/>
                    <input name="email" type="email" placeholder="ایمیل (اختیاری)" className="outline-none border-none text-[17px] w-full"/>
                </div>
                {/* get the username*/}
                <div className="inputText border-[1px] border-gray-300 flex py-3 px-6 rounded-[8px] mb-4" style={{direction:"rtl"}}>
                    <RiAccountCircleLine className="text-2xl text-gray-400 ml-3"/>
                    <input name="username" type="text" placeholder="نام کاربری" value={state.username} onChange={e => setState({...state, username: e.target.value})} className="outline-none border-none text-[17px] w-full"/>
                </div>
                {/* get the password */}
                <div className="inputText border-[1px] border-gray-300 flex py-3 px-6 rounded-[8px] mb-4" style={{direction:"rtl"}}>
                    <LuKeyRound className="text-2xl text-gray-400 ml-3"/>
                    <input name="password" type="password" placeholder="انتخاب رمز عبور" value={state.password} onChange={e => setState({...state, password: e.target.value})} className="outline-none border-none text-[17px] w-full"/>
                </div>
                {/* submit the form via this button */}
                <div className="button-form w-full text-center mt-6">
                    <button type="submit" className="bg-blue-600 w-full rounded-[8px] py-3 px-6 text-white">ایجاد حساب کاربری</button>
                    <p className="mt-5">قبلا حساب کاربری ساخته بودی؟ <a className="text-blue-600 mr-2" style={{textDecoration:"underline"}} href="/accounts/login">وارد شوید</a></p>
                </div>
            </form>
        </div>
    )
}

export default Register;