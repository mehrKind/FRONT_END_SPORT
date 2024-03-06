import React, { useEffect, useState } from "react";
import NavbarPage from "./components/nav/NavbarPage.jsx";
import contactus from '../assets/contactUs.png'
import axios from "axios";
import MehrAlert from "./components/nav/MehrAlert.jsx";
import { useNavigate } from 'react-router-dom';

const localHost = "http://127.0.0.1:"
const ipHost = "http://192.168.42.50:"
const port = "8000/"
const Host = ipHost

const token = localStorage.getItem("access_token");
// localStorage.removeItem("access_token")

const Contact = () => {
    // variables
    const navigate = useNavigate();
    const [textBody, setTextBody] = useState('')
    const [user, setUser] = useState(null)
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertStatus, setAlertStatus] = useState(false);
    console.log(localStorage.getItem('username'));


    // function to close the popUp menu
    const handleClose = () => {
        setShowAlert(false);
    };

    // post a request to send message to admin
    const handleContact = async (event) => {
        event.preventDefault();

        try {
            // console.log(userId)
            const response = await axios.post(Host+port+'api/v1/contact/', {
                textBody: textBody,
                user: userId
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });

            if (response.status === 200) {
                setAlertMessage("با موققیت ارسال شد");
                setAlertStatus(true);
                setShowAlert(true);
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
            setAlertMessage("خطا در برقراری ارتباط با سرور");
            // setAlertMessage(error)
            setAlertStatus(false);
            setShowAlert(true);
        }
    };


    return (
        <div className="container yekan">
            {showAlert && <MehrAlert title="ارسال پیام" message={alertMessage} status={alertStatus} onClose={handleClose} />}
            <NavbarPage PageName="ارتباط با ما" PageDesc="پیشنهادات / انتقادات"/>
            <div className="contact-us-img flex justify-center">
                <img src={contactus} className="w-[350px]" alt="contactPage"/>
            </div>
            <div className="contact-us-form mt-2 text-right">
                {/*<p>همراه دوم - علیرضا مهربان</p>*/}
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="w-full border-gray-300 border-[1px] p-3 rounded-md text-gray-700 text-right mt-5 focus:border-blue-600 outline-none"
                    style={{direction:"rtl"}}
                    placeholder="متن خود را اینجا بنویسید"
                    onChange={e => setTextBody(e.target.value)}
                ></textarea>
                <button
                    className="w-full bg-blue-500 py-3 my-3 rounded-md text-white hover:bg-blue-300 transition-all duration-200 "
                    type="button"
                    onClick={handleContact}
                >
                    ارسال پیام
                </button>
            </div>
        </div>
    )
};

export default Contact;
