import React, { useState } from 'react';
import axios from 'axios';
import { Host, port } from '../../config.jsx';
import NavbarPage from '../nav/NavbarPage.jsx';

const CodeRecovery = () => {
    const [code, setCode] = useState(['', '', '', '']);

    const handleChange = (event, index) => {
        const { value } = event.target;
        if (!isNaN(value) && value.length <= 1) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
            if (value !== '' && event.target.nextSibling) {
                event.target.nextSibling.focus();
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`${Host}${port}api/v1/accounts/password_recovery/anystring/`, {
                digit: code.join(''),
            });
            if (response.status === 200) {
                console.log('Code is correct');
                // Redirect or show success message to the user
            }
        } catch (error) {
            console.log('Error:', error);
            // Display error message to the user
        }
    };

    return (
        <div className="container yekan">
            <NavbarPage PageName="بازیابی رمز عبور" PageDesc="کد 4 رقمی" />
            <h1 className="text-right my-2 text-[1.2rem]">کد چهار رقمی به ایمیل شما ارسال شد</h1>
            <p className="text-gray-500 text-right mb-3">لطفا کد را در محل زیر وارد کنید</p>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center text-center items-center mt-10">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="w-full mr-6 p-3 border-2 rounded-lg border-blue-500 outline-none text-center appearance-none"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                        />
                    ))}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-center p-3 mt-7 rounded-lg text-white hover:bg-blue-300 transition-all duration-200"
                >
                    تایید
                </button>
            </form>
        </div>
    );
};

export default CodeRecovery;
