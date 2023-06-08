import React from 'react'
import refer_img from '../assets/images/refer-img.svg'
import Dash_sidebar from '../components/Dash_sidebar';


const Refer_dash = () => {
    return (
        <div className='font-Poppins bg-gray-100'>


            {/* refer and earn */}
            <div className="ml-60 pb-10 min-h-screen h-full">
                <div className="">
                    <h1 className="text-xl font-semibold border border-1 border-gray-300 bg-white pl-4 py-4 shadow-[rgba(21,_21,_21,_0.5)_0px_0px_2px]">
                        Refer &amp; Earn
                    </h1>
                    <div className="flex mt-10 mx-10 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
                        <div className="bg-white px-3 py-4 min-w-full min-h-full border border-1 border-gray-300 rounded-md flex flex-col text-center justify-center items-center">
                            <h1 className="text-3xl font-semibold mt-16 font-SourceSansPro">
                                Invite your business partners &amp; save more
                            </h1>
                            <p className="text-xl font-light mt-10">
                                The more business partners that joins, the more we grow.
                                <br />
                                The more we grow, the more you earn.
                            </p>
                            <img className="mt-16" src={refer_img} alt="refer-img" />
                            <button
                                name="invite"
                                className="text-white bg-[#15213A] hover:bg-[#1c2d4f] py-0.5 h-10 w-52 mt-14 mb-6 rounded-md "
                                type="submit"
                            >
                                Invite
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Refer_dash