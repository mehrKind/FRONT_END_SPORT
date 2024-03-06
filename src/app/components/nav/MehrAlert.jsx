import React, { useEffect } from 'react';
import { GoIssueClosed } from "react-icons/go";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MehrAlert = ({title, message, status, onClose}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="yekan bg-gray-900/50 absolute w-full h-full top-0 right-0 bottom-0 left-0 z-[800]">
            <div className="showMessage flex text-center justify-center items-center h-full">
                <div className="messageCard bg-white w-[300px] p-5">
                    <h1 className="text-right text-[1.5rem] text-blue-600 yekanBold">{title}</h1>
                    <hr className="my-3"/>
                    {
                        status ?
                            <div className="flex justify-center items-center flex-col">
                                <GoIssueClosed className="text-green-700 text-[6rem] rounded-full"/>
                                <p className="text-gray-900 mt-5 text-[1.3rem]">{message}</p>
                            </div>
                            :
                            <div className="flex justify-center items-center flex-col">
                                <AiOutlineCloseCircle className="text-red-700 text-[6rem] rounded-full"/>
                                <p className="text-gray-900 mt-5 text-[1.3rem]">{message}</p>
                            </div>
                    }
                    <button className="mt-5 text-[1.1rem] bg-blue-400/85 py-2 px-4 rounded-md text-white hover:bg-blue-600 transition-all duration-200" onClick={onClose}>بستن</button>
                </div>
            </div>
        </div>
    )
}

export default MehrAlert;
