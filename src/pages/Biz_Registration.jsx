import React, { useState } from 'react';
import { supabase } from '../supabase/business';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Biz_Registration = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true)
    const [registration, setRegistration] = useState(false)



    const [bizData, setBizData] = useState({

        biz_name: "",
        biz_email: "",
        biz_phone: "",
        biz_website: "",
        biz_type: "",
        biz_category: "",
        company_gst: "",
        biz_address: "",
        biz_zipcode: "",
        biz_city: "",
        biz_state: "",
        biz_country: "",
        user_name: "",
        user_phone: "",
        user_email: "",
        job_title: "",

    })



    async function handleSubmit(e) {
        e.preventDefault();

        const { data, error } = await supabase
            .from('biz_user_db')
            .update(
                {

                    biz_name: bizData.biz_name,
                    biz_email: bizData.biz_email,
                    biz_phone: bizData.biz_phone,
                    biz_website: bizData.biz_website,
                    biz_type: bizData.biz_type,
                    biz_category: bizData.biz_category,
                    company_gst: bizData.company_gst,
                    biz_address: bizData.biz_address,
                    biz_zipcode: bizData.biz_zipcode,
                    biz_city: bizData.biz_city,
                    biz_state: bizData.biz_state,
                    biz_country: bizData.biz_country,
                    user_name: bizData.user_name,
                    user_phone: bizData.user_phone,
                    user_email: bizData.user_email,
                    job_title: bizData.job_title,

                }

            )
            .eq("biz_id", user.id)
            .select()

        if (data) {


            const { data, error } = await supabase.auth.refreshSession()
            if (data) {
                navigate("/dashboard")
            }
            else if (error) {
                // console.log(error);
            }

        } else {
            // console.log(error);
        }


    }


    function handleChange(e) {
        const { name, value } = e.target;
        setBizData((prev) => {
            return { ...prev, [name]: value }
        })


    }




    return (

        <div className='bg-gray-100 py-8 font-Poppins'>
            <h1 className="text-4xl text-center">Company Registration</h1>
            {/* Form */}
            {registration &&
                <div className="text-left text-sm tab:text-base lap:text-lg w-[350px] tab:w-[600px] lap:w-2/5 my-6 mx-auto bg-white p-10 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    {/* Company details */}
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 space-y-1">
                            <h2 className="text-xl col-span-2 text-left my-3 pb-5">
                                Company Details
                            </h2>
                            <p>Company Name: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="text"
                                name="biz_name"
                                value={bizData.biz_name}
                                onChange={handleChange}
                                required

                            />
                            <p>Company Email: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="email"
                                name="biz_email"
                                onChange={handleChange}
                                required
                                value={bizData.biz_email}
                            />
                            <p>Company Phone: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="tel"
                                name="biz_phone"
                                onChange={handleChange}
                                required
                                value={bizData.biz_phone}
                            />
                            <p>Company WebSite: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="url"
                                name="biz_website"
                                onChange={handleChange}
                                required
                                value={bizData.biz_website}
                            />
                            <p>Business Type: </p>
                            <select
                                id="type-signup"
                                onChange={handleChange}
                                name="biz_type"
                                required
                                className="text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block border-2 border-gray-200 w-full h-8 m-auto"
                            >
                                <option value="choose business type">
                                    Choose Business type
                                </option>
                                <option value="Private Limited Company" className="text-gray-700 font-Poppins">
                                    Private Limited Company
                                </option>
                                <option value="Public Limited Company" className="text-gray-700 font-Poppins">
                                    Public Limited Company
                                </option>
                                <option value="Partnership Company" className="text-gray-700 font-Poppins">
                                    Partnerships Company
                                </option>
                                <option value="Limited Liability Partnership" className="text-gray-700 font-Poppins">
                                    Limited Liability Partnership
                                </option>
                                <option value="One Person Company" className="text-gray-700 font-Poppins">
                                    One Person Company
                                </option>
                                <option value="Sole Proprietorship" className="text-gray-700 font-Poppins">
                                    Sole Proprietorship
                                </option>
                            </select>
                            <p>Business Categary: </p>
                            <select
                                id="type-signup"
                                onChange={handleChange}
                                name="biz_category"
                                required
                                className="text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block border-2 border-gray-200 w-full h-8 m-auto"
                            >
                                <option value="">
                                    Choose Business Category
                                </option>
                                <option value="Retail Store" className="text-gray-700 font-Poppins">Retail Store</option>
                                <option value="Wholesaler" className="text-gray-700 font-Poppins">Wholesaler</option>
                                <option value="Consultant" className="text-gray-700 font-Poppins">Consultant</option>
                                <option value="Education" className="text-gray-700 font-Poppins">Education</option>
                                <option className="text-gray-700 font-Poppins">
                                    Service Provider
                                </option>
                                <option value="Financial Services Provider" className="text-gray-700 font-Poppins">
                                    Financial Services Provider
                                </option>
                                <option value="Health services provider" className="text-gray-700 font-Poppins">
                                    Health services provider
                                </option>
                                <option value="Restaurant / Bar / Wine Store" className="text-gray-700 font-Poppins">
                                    Restaurant / Bar / Wine Store
                                </option>
                                <option value="Utilities" className="text-gray-700 font-Poppins">Utilities</option>
                                <option value="Travel and transport" className="text-gray-700 font-Poppins">
                                    Travel and transport
                                </option>
                                <option value="Goverment" className="text-gray-700 font-Poppins">Government</option>
                                <option value="Online store / Marketplace" className="text-gray-700 font-Poppins">
                                    Online store / Marketplace
                                </option>
                                <option value="Social Media" className="text-gray-700 font-Poppins">Social media</option>
                                <option value="Charity" className="text-gray-700 font-Poppins">Charity / NGO</option>
                                <option value="Others" className="text-gray-700 font-Poppins">Others</option>
                            </select>
                            <p>Business Registration Number: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="text"
                                onChange={handleChange}
                                name="company_gst"
                                required
                                value={bizData.company_gst}
                            />
                            <p>Address: </p>
                            <textarea
                                className="border-2 border-gray-200 text-sm rounded-md p-2"
                                required
                                name="biz_address"
                                onChange={handleChange}
                                value={bizData.biz_address}
                                cols={30}
                                rows={3}

                            />
                            <p>Zipcode: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="text"
                                name="biz_zipcode"
                                onChange={handleChange}
                                required
                                value={bizData.biz_zipcode}
                            />
                            <p>City: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="text"
                                name="biz_city"
                                onChange={handleChange}
                                required
                                value={bizData.biz_city}
                            />
                            <p>State: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="text"
                                name="biz_state"
                                onChange={handleChange}
                                required
                                value={bizData.biz_state}
                            />
                            <p>Country: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="text"
                                name="biz_country"
                                onChange={handleChange}
                                required
                                value={bizData.biz_country}
                            />
                        </div>
                        {/* Contact details */}
                        <div className="grid grid-cols-2 space-y-1">
                            <h2 className="text-xl col-span-2 text-left mt-28 pb-5">
                                Contact Details
                            </h2>
                            <p>Name: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="text"
                                name="user_name"
                                onChange={handleChange}
                                required
                                value={bizData.user_name}
                            />
                            <p>Phone: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="tel"
                                name="user_phone"
                                onChange={handleChange}
                                required
                                value={bizData.user_phone}
                            />
                            <p>Email: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="email"
                                name="user_email"
                                onChange={handleChange}
                                required
                                value={bizData.user_email}
                            />
                            <p>Job Title: </p>
                            <input
                                className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="text"
                                onChange={handleChange}
                                name="job_title"
                                value={bizData.job_title}
                            />
                        </div>
                        <div className="grid grid-cols-2 mt-6">
                            <p />
                            <button
                                className="bg-blue-600 hover:bg-slate-800 text-gray-300 w-full h-9 mx-auto rounded-md font-Poppins tracking-wide"
                                type="submit"
                                name="registration_next_button"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>}
        </div>


    )
}

export default Biz_Registration