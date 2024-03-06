import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install this package
import appLogo from '../../../assets/main_icon.png';
import MehrAlert from "../nav/MehrAlert.jsx";
import { useNavigate } from 'react-router-dom';


const localHost = "http://127.0.0.1:"
const ipHost = "http://192.168.42.50:"
const port = "8000/"
const Host = ipHost


const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertStatus, setAlertStatus] = useState(false);

    const handleClose = () => {
        setShowAlert(false);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(Host+port+'api/v1/token/', {
                username: username,
                password: password
            });

            if (response.status === 200) {
                setAlertMessage("با موفقیت وارد شدید");
                setAlertStatus(true);
                setShowAlert(true);
                localStorage.setItem('access_token', response.data.access);
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
                // console.log(response.data)
                setTimeout(()=>{
                    navigate("/")
                }, 2000)
            } else {
                setAlertMessage(`خطای ${response.status}`);

                setAlertStatus(false);
                setShowAlert(true);
            }
        } catch (error) {
            setAlertMessage("نام کاربری یا رمز عبور اشتباه است");
            setAlertStatus(false);
            setShowAlert(true);
        }
    };

    return (
        <div className="yekan container">
            {showAlert && <MehrAlert title="ورود" message={alertMessage} status={alertStatus} onClose={handleClose} />}
            <div className="login-container mr-5" style={{marginTop: "3rem", direction:"rtl"}}>
                <div className="logo-part">
                    <img className="w-[130px]" src={appLogo} alt="main-icon.png"/>
                    <h1 className="text-[2.5rem]">خوش آمدید</h1>
                    <p className="text-gray-400">برای ادامه دادن، وارد شوید</p>
                </div>
                <div className="form_input text-center mt-8">
                    <form autoSave="on" autoComplete="off" onSubmit={handleLogin}>
                        <input className="border-[1px] border-gray-[400] rounded-xl w-full py-3 text-center outline-none focus:borer-[1px] focus:border-pink-600 mb-6" placeholder="نام کاربری" type="text" name="username" onChange={e => setUsername(e.target.value)}/>
                        <input className="border-[1px] border-gray-[400] rounded-xl w-full py-3 text-center outline-none focus:borer-[1px] focus:border-pink-600 mb-6" placeholder="کلمه عبور" type="password" name="password" onChange={e => setPassword(e.target.value)}/>
                        <button type="submit" className="w-full bg-blue-500 rounded-xl text-white py-3 hover:bg-blue-400 transition-all duration-200">ورود</button>
                    </form>
                    <div className="forget-part px-2 my-4 text-md">
                        <a className="text-blue-500" href="#">فراموشی رمز عبور ؟</a>
                        <hr className="my-4"/>
                        <p className="text-gray-500"> حساب ندارید؟ <a className="text-blue-500 mr-5" href="http://127.0.0.1:8000/api/v1/accounts/logout">رایگان حساب ایجاد کنید</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
