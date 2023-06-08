import React, { useEffect, useState } from 'react'
import user_img from '../assets/images/user_img.png'
import Dash_sidebar from '../components/Dash_sidebar';
import { supabase } from '../supabase/business';
import { useAuth } from '../context/AuthProvider';
import { Alert } from 'antd';
import Loading from '../components/Loading'


const Biz_dash = () => {

    const [loading, setLoading] = useState(false)
    const [toggle, setToggle] = useState(true)
    const [message, setMessage] = useState("");
    const [fetchData, setFetchData] = useState({
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
    });
    const [name, setName] = useState("");

    const { user } = useAuth();



    function handleChange(e) {
        const { name, value } = e.target;
        setFetchData((prev) => {
            return { ...prev, [name]: value }
        })


    }
    async function handleSubmit(e) {
        e.preventDefault();


        const { data, error } = await supabase
            .from('biz_user_db')
            .update({
                biz_name: fetchData.biz_name,
                biz_email: fetchData.biz_email,
                biz_phone: fetchData.biz_phone,
                biz_website: fetchData.biz_website,
                biz_type: fetchData.biz_type,
                biz_category: fetchData.biz_category,
                company_gst: fetchData.company_gst,
                biz_address: fetchData.biz_address,
                biz_zipcode: fetchData.biz_zipcode,
                biz_city: fetchData.biz_city,
                biz_state: fetchData.biz_state,
                biz_country: fetchData.biz_country,
                user_name: fetchData.user_name,
                user_phone: fetchData.user_phone,
                user_email: fetchData.user_email,
                job_title: fetchData.job_title,

            })
            .eq("biz_id", user.id)
            .select()
        if (data) {
            setMessage("Your Business Profile Is Sucessfully Updated")
        }


    }

    useEffect(() => {

        bizfetchData();
        async function bizfetchData() {
            const { data, error } = await supabase
                .from("biz_user_db")
                .select("*")
                .eq("biz_id", user.id)
                .single()

            if (data) {
                // console.log(data);
                setFetchData(data)
                setName(data.biz_name)
            } else {
                // console.log(error);
            }

        }

    }, [])
    return (
        <div className='font-Poppins bg-gray-100'>


            return (
            <div className="ml-60 min-h-screen h-full">
                {loading && <Loading />}
                <div>
                    <h1 className="text-xl font-semibold border border-1 border-gray-300 bg-white -mt-6 px-4 py-4 shadow-[rgba(21,_21,_21,_0.5)_0px_0px_2px] font-SourceSansPro">
                        Your Profile
                    </h1>
                    <div className='pt-10 pb-4 px-10'>
                        <div className="text-left min-w-max bg-white rounded-3xl py-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-row justify-center">
                                    {/* Company fetchDatas */}
                                    <div className="grid grid-cols-2 space-y-1 py-6 pr-10">
                                        <h2 className="text-xl col-span-2 text-left my-3 pb-5">
                                            Company Details
                                        </h2>
                                        <p>Company Name: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide`}
                                            type="text"
                                            onChange={handleChange}
                                            placeholder={fetchData.biz_name}
                                            value={fetchData.biz_name}
                                            name="biz_name"
                                            readOnly={toggle}
                                            required
                                        />
                                        <p>Company Email: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide`}
                                            type="email"
                                            value={fetchData.biz_email}
                                            onChange={handleChange}
                                            placeholder={fetchData.biz_email}
                                            name="biz_email"
                                            readOnly={toggle}
                                            required
                                        />
                                        <p>Company Phone: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wid`}
                                            type="tel"
                                            onChange={handleChange}
                                            value={fetchData.biz_phone}
                                            name="biz_phone"
                                            readOnly={toggle}
                                            required
                                        />
                                        <p>Company WebSite: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wid`}
                                            type="url"
                                            onChange={handleChange}
                                            value={fetchData.biz_website}
                                            name="biz_website"
                                            readOnly={toggle}
                                            required
                                        />
                                        <p>Business Type: </p>
                                        <select
                                            id="type-signup"
                                            name="biz_type"
                                            onChange={handleChange}
                                            disabled={toggle}
                                            required
                                            defaultValue={fetchData.biz_type}
                                            className="text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block border-2 border-gray-200 w-full px-2 h-8 m-auto"
                                        >
                                            <option disabled value={fetchData.biz_type} hidden>
                                                {fetchData.biz_type}
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                Private Limited Company
                                            </option>
                                            <option value={' Public Limited Company'} className="text-gray-700 font-Poppins">
                                                Public Limited Company
                                            </option>
                                            <option value={'Partnerships Company'} className="text-gray-700 font-Poppins">
                                                Partnerships Company
                                            </option>
                                            <option value={'Limited Liability Partnership'} className="text-gray-700 font-Poppins">
                                                Limited Liability Partnership
                                            </option>
                                            <option value={'One Person Company'} className="text-gray-700 font-Poppins">
                                                One Person Company
                                            </option>
                                            <option value={'Sole Proprietorship'} className="text-gray-700 font-Poppins">
                                                Sole Proprietorship
                                            </option>
                                        </select>
                                        <p>Business Categary: </p>
                                        <select
                                            id="type-signup"
                                            onChange={handleChange}
                                            name="biz_category"
                                            disabled={toggle}
                                            required
                                            defaultValue={'DEFAULT'}
                                            className="text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block border-2 border-gray-200 w-full px-2 h-8 m-auto"
                                        >
                                            <option disabled value={'DEFAULT'} hidden>
                                                {fetchData.biz_category}
                                            </option>
                                            <option value={'Retail Store'} className="text-gray-700 font-Poppins">
                                                Retail Store
                                            </option>
                                            <option value={'Wholesaler'} className="text-gray-700 font-Poppins">Wholesaler</option>
                                            <option value={'Consultant'} className="text-gray-700 font-Poppins">Consultant</option>
                                            <option value={'Education'} className="text-gray-700 font-Poppins">Education</option>
                                            <option value={'Service Provider'} className="text-gray-700 font-Poppins">
                                                Service Provider
                                            </option>
                                            <option value={'Financial Services Provider'} className="text-gray-700 font-Poppins">
                                                Financial Services Provider
                                            </option>
                                            <option value={'Health services provider'} className="text-gray-700 font-Poppins">
                                                Health services provider
                                            </option>
                                            <option value={'Restaurant / Bar / Wine Store'} className="text-gray-700 font-Poppins">
                                                Restaurant / Bar / Wine Store
                                            </option>
                                            <option value={'Utilities'} className="text-gray-700 font-Poppins">Utilities</option>
                                            <option value={'Travel and transport'} className="text-gray-700 font-Poppins">
                                                Travel and transport
                                            </option>
                                            <option value={'Government'} className="text-gray-700 font-Poppins">Government</option>
                                            <option value={'Online store / Marketplace'} className="text-gray-700 font-Poppins">
                                                Online store / Marketplace
                                            </option>
                                            <option value={'Social media'} className="text-gray-700 font-Poppins">
                                                Social media
                                            </option>
                                            <option value={'Charity / NGO'} className="text-gray-700 font-Poppins">
                                                Charity / NGO
                                            </option>
                                            <option value={'Others'} className="text-gray-700 font-Poppins">Others</option>
                                        </select>
                                        <p>Business Registration Number: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide`}
                                            type="text"
                                            onChange={handleChange}
                                            value={fetchData.company_gst}
                                            name="company_gst"
                                            readOnly={toggle}
                                            required
                                        />
                                        <p>Address: </p>
                                        <textarea
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md p-2`}
                                            readOnly={toggle}
                                            required
                                            value={fetchData.biz_address}
                                            onChange={handleChange}
                                            name="biz_address"
                                            cols={30}
                                            rows={3}

                                        />
                                        <p>Zipcode: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide`}
                                            type="text"
                                            name="biz_zipcode"
                                            value={fetchData.biz_zipcode}
                                            onChange={handleChange}
                                            readOnly={toggle}
                                            required
                                        />
                                        <p>City: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide`}
                                            type="text"
                                            name="biz_city"
                                            onChange={handleChange}
                                            readOnly={toggle}
                                            required
                                            value={fetchData.biz_city}
                                        />
                                        <p>State: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide`}
                                            type="text"
                                            name="biz_state"
                                            onChange={handleChange}
                                            readOnly={toggle}
                                            required
                                            value={fetchData.biz_state}
                                        />
                                        <p>Country: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide`}
                                            type="text"
                                            name="biz_country"
                                            readOnly={toggle}
                                            required
                                            onChange={handleChange}
                                            value={fetchData.biz_country}
                                        />
                                    </div>
                                    {/* Contact fetchDatas */}
                                    <div className="grid grid-cols-2 space-y-1 p-6 pb-96  ">
                                        <h2 className="text-xl col-span-2 text-left pb-5 mt-3">
                                            Contact Details
                                        </h2>
                                        <p>Name: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide`}
                                            type="text"
                                            name="user_name"
                                            onChange={handleChange}
                                            readOnly={toggle}
                                            required
                                            value={fetchData.user_name}
                                        />
                                        <p>Phone: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wid`}
                                            type="tel"
                                            name="user_phone"
                                            onChange={handleChange}
                                            readOnly={toggle}
                                            required
                                            value={fetchData.user_phone}
                                        />
                                        <p>Email: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide`}
                                            type="email"
                                            name="user_email"
                                            onChange={handleChange}
                                            readOnly={toggle}
                                            required
                                            value={fetchData.user_email}
                                        />
                                        <p>Job Title: </p>
                                        <input
                                            className={`${toggle && "outline-none"} border-2 border-gray-200 text-sm rounded-md px-2 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide`}
                                            type="text"
                                            name="job_title"
                                            onChange={handleChange}
                                            readOnly={toggle}
                                            required
                                            value={fetchData.job_title}
                                        />
                                    </div>
                                </div>

                                <div>
                                    {
                                        message &&
                                        <div className='mx-48 mt-5 py-1 border border-1 border-green-700 rounded-md'>
                                            <Alert
                                                message={message}
                                                banner
                                                type='success'
                                                closable
                                                onClose={() => { setMessage("") }}
                                            />
                                        </div>
                                    }
                                </div>

                                <div className="flex mt-10">


                                    <button
                                        className="items-center justify-center bg-blue-600 hover:bg-slate-800 text-gray-300 w-1/5 h-9 mx-auto rounded-md font-Poppins tracking-wide"
                                        type="button"
                                        hidden={!toggle}
                                        name="registration_edit_button"
                                        onClick={() => setToggle(false)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="items-center justify-center bg-blue-600 hover:bg-slate-800 text-gray-300 w-1/5 h-9 mx-auto rounded-md font-Poppins tracking-wide"
                                        type="submit"
                                        hidden={toggle}
                                        name="registration_next_button"
                                        onClick={() => {
                                            setLoading(true);
                                            setTimeout(() => {
                                                setLoading(false)
                                                setToggle(true)
                                            }, 700);
                                        }}
                                    >
                                        Update
                                    </button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>

            );


            {/* Business profile */}

        </div>

    )
}

export default Biz_dash