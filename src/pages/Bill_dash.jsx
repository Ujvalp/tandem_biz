import React from 'react'

const Bill_dash = () => {
    return (
        <div className='font-Poppins bg-gray-100'>


            {/* Billing     */}
            <div className="ml-60 pb-10 min-h-screen h-full">
                <div className="">
                    <h1 className="text-xl font-semibold border border-1 border-gray-300 bg-white pl-4 py-4 shadow-[rgba(21,_21,_21,_0.5)_0px_0px_2px] font-SourceSansPro">
                        Billing
                    </h1>
                    <div className="mt-3 mx-10">
                        {/* OverView */}
                        <div className="grid grid-rows-3">
                            <div className="flex items-center ">
                                <h3 className="text-2xl text-[#687E96] h-8">Over view</h3>
                            </div>
                            <div className="top grid grid-cols-5 border-2 rounded-md rounded-b-none text-center items-center text-[#737373] text-lg font-semibold h-[80px] bg-white">
                                <p>Date</p>
                                <p>Billing Cycle</p>
                                <p>Amount</p>
                                <p>Due Date</p>
                                <p>Status</p>
                            </div>
                            <div className="bottom grid grid-cols-5 border-2 border-t-0 rounded-md rounded-t-none text-center items-center text-[#737373] text-base font-normal h-14 bg-white">
                                <p>25/12/2023</p>
                                <p>January</p>
                                <p>₹ 25,000</p>
                                <p>10 Feb 2023</p>
                                <p>Pending</p>
                            </div>
                        </div>
                        {/* Billing Email */}
                        <div className="flex flex-col mt-3">
                            <div className="flex flex-col text-left text-[#687E96]">
                                <h3 className="text-2xl h-8">Billing email</h3>
                                <p>All billing correspondence will go to this email</p>
                            </div>
                            <div className="top grid grid-cols-2 border-2 text-center items-center text-[#737373] h-48 bg-white mt-3 rounded-md">
                                <input
                                    className="border-2 rounded-md ml-10 h-12 w-[420px] px-5"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    id=""
                                />
                                <div className="text-base space-x-3">
                                    <button
                                        className="border-2 border-[#696969] rounded-md h-8 w-28 hover:bg-slate-200"
                                        type="reset"
                                    >
                                        Cancle
                                    </button>
                                    <button
                                        className="bg-[#109C2F] hover:bg-[#12ac33] text-white rounded-md h-8 w-28"
                                        type="submit"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Billing Address */}
                        <div className="flex flex-col mt-10">
                            <div className="flex flex-col text-left text-[#687E96]">
                                <h3 className="text-2xl h-8">Billing address</h3>
                                <p>This will be reflected in every invoice</p>
                            </div>
                            <div className="top grid grid-cols-2 border-2 text-center items-center text-[#737373] bg-white mt-3 rounded-md">
                                <form
                                    className="text-left flex justify-between w-[1220px] my-6 py-14 px-20"
                                    action=""
                                    method="post"
                                >
                                    <div className="grid grid-cols-2 space-y-1 w-1/2">
                                        <p className="text-[#151515] pl-20">Address: </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="address"
                                            placeholder="Address"
                                            required=""
                                            id=""
                                        />
                                        <p className="text-[#151515] pl-20">City: </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            required=""
                                            id=""
                                        />
                                        <p className="text-[#151515] pl-20">Zip code: </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="tel"
                                            name="zip"
                                            placeholder="Zip code"
                                            required=""
                                            id=""
                                        />
                                        <p className="text-[#151515] pl-20">State: </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="state"
                                            placeholder="State"
                                            required=""
                                            id=""
                                        />
                                        <p className="text-[#151515] pl-20">Country: </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="country"
                                            placeholder="Country"
                                            required=""
                                            id=""
                                        />
                                    </div>
                                    <div className="col-start-2">
                                        <div className="flex mt-20 space-x-3">
                                            <button
                                                className="border-2 border-[#696969] rounded-md h-8 w-28 hover:bg-slate-200"
                                                type="reset"
                                                name="cancle"
                                            >
                                                Cancle
                                            </button>
                                            <button
                                                className="bg-[#109C2F] hover:bg-[#12ac33] text-white rounded-md h-8 w-28"
                                                type="submit"
                                                name="next"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Tax ID / GST */}
                        <div className="flex flex-col mt-10">
                            <div className="flex flex-col text-left text-[#687E96]">
                                <h3 className="text-2xl h-8">Tax ID / GST ID</h3>
                                <p>
                                    If you would like to include specific tax ID(s) to your invoices.{" "}
                                    <br />
                                    Make sure the tax ID looks exactly like the placeholder text.
                                </p>
                            </div>
                            <div className="top grid grid-cols-2 border-2 text-center items-center text-[#737373] h-48 bg-white mt-3 rounded-md">
                                <input
                                    className="border-2 rounded-md ml-10 h-12 w-[420px] px-5"
                                    type="text"
                                    name="tax"
                                    placeholder="Tax ID"
                                    id=""
                                />
                                <div className="text-base space-x-3">
                                    <button
                                        className="border-2 border-[#696969] rounded-md h-8 w-28 hover:bg-slate-200"
                                        type="reset"
                                        name="cancle"
                                    >
                                        Cancle
                                    </button>
                                    <button
                                        className="bg-[#109C2F] hover:bg-[#12ac33] text-white rounded-md h-8 w-28"
                                        type="submit"
                                        name="next"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bill_dash