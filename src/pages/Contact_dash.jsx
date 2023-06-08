import React from 'react'
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import Dash_sidebar from '../components/Dash_sidebar';


const Contact_dash = () => {
    return (
        <div className='font-Poppins bg-gray-100'>


            {/* Contact us */}
            <div className="ml-60 pb-10 font-SourceSansPro min-h-screen h-full">
                <div className="">
                    <h1 className="text-xl font-semibold border border-1 border-gray-300 bg-white pl-4 py-4">
                        Contact Us
                    </h1>
                    <div className="flex mt-10 mx-10 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
                        <div className="bg-white px-3 py-4 min-w-full min-h-full border border-1 border-gray-300 rounded-md flex flex-col text-center justify-center items-center">
                            <h1 className="text-5xl font-semibold mt-28 font-SourceSansPro">
                                Contact Us
                            </h1>
                            <div className="flex justify-center items-center w-2/3 space-x-5 mt-20">
                                <a target="_blank" href="https://wa.me/+917016580318">
                                    <div className="left h-24 w-fit pl-12 pr-16 border border-1 border-[#151515] hover:bg-gray-200 duration-300 rounded-lg flex justify-center items-center">
                                        <div className="mr-4 border-2 border-gray-200 rounded-full ">
                                            <IoLogoWhatsapp className="text-6xl text-green-600 p-2" />
                                        </div>
                                        <div className="text-left">
                                            <p>Let's Chat</p>
                                            <span className="text-[#737373]">will reply in 2hrs</span>
                                        </div>
                                    </div>
                                </a>
                                <a target="_blank" href="mailto:hello@tandem.com">
                                    <div className="left h-24 w-fit px-12 border border-1 border-[#151515] hover:bg-gray-200 duration-300 rounded-lg flex justify-center items-center">
                                        <div className="mr-4 border-2 border-gray-200 rounded-full">
                                            <IoIosMail className="text-6xl text-black p-2" />
                                        </div>
                                        <div className="text-left">
                                            <p>hello@tandem.com</p>
                                            <span className="text-[#737373]">will reply in 24hrs</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <p className="text-[#737373] text-base mt-6">
                                We are available on all days between 10 AM to 7PM
                            </p>
                            <div className="address flex space-x-48 mt-20 mb-14">
                                <div className="left">
                                    <h1 className="text-xl font-semibold">Correspondence Address</h1>
                                    <p className="text-base">
                                        The Pavillion,
                                        <br />
                                        #175, Dollars Colony,
                                        <br />
                                        Near Rainbow Hospital, Bannerghatta Main Rd,
                                        <br />
                                        Bengaluru, Karnataka 560076
                                    </p>
                                </div>
                                <div className="right">
                                    <h1 className="text-xl font-semibold">Registered Address</h1>
                                    <p className="text-base">
                                        Plot No. 2, Krushna Colony,
                                        <br />
                                        Near MS-E.B Colony, Jail Road,
                                        <br />
                                        Nashik Road,Nashik,
                                        <br />
                                        Maharastra,422101
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_dash