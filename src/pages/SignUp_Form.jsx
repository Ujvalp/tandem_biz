import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Company_Add from '../components/Company_Add';
import Company_Details from '../components/Company_Details';
import ContactDetail from '../components/ContactDetail';
import SignUp_Info from '../components/SignUp_Info';
import logo from '../assets/images/tandem_logo.svg'
import { supabase } from '../supabase/business';
import { Alert } from 'antd';


const SignUp_Form = () => {

    const [page, setPage] = useState(0);
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("")
    const [formData, setFormData] = useState({
        cName: "",
        cEmail: "",
        cPhone: "",
        cWebsite: "",
        cReg: "",
        cType: "",
        cCategory: "",
        cAdd: "",
        cZip: "",
        cCity: "",
        cState: "",
        cCountry: "",
        pName: "",
        pEmail: "",
        pPhone: "",
        jobTitle: "",
        email: "",
        password: "",
        confirmPassword: "",
    })




    const [loading, setLoading] = useState(false);

    // const register = (email, password) =>
    //     supabase.auth.signUp({ email, password });


    function handleSubmit(e) {
        e.preventDefault();
        if(page < FormTitles.length-1){
            setPage((currPage) => currPage + 1);

        }
            
        
        
    }

    const signUp = async () => {

        if (!formData.cName || !formData.cEmail || !formData.cPhone || !formData.cWebsite || !formData.cReg || !formData.cType || !formData.cCategory || !formData.cAdd || !formData.cZip || !formData.cCity || !formData.cState || !formData.cCountry || !formData.pName || !formData.pEmail || !formData.pPhone || !formData.jobTitle || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("Please fill in all the details")
        }
        else {

            //get user from data
            const { data: { user }, error } = await supabase.auth.signUp(
                {
                    email: formData.email,
                    password: formData.password,
                    options: {
                        data: {
                            biz_name: formData.cName,
                            biz_email: formData.cEmail,
                            biz_phone: formData.cPhone,
                            biz_website: formData.cWebsite,
                            biz_reg: formData.cReg,
                            biz_type: formData.cType,
                            biz_category: formData.cCategory,
                            biz_address: formData.cAdd,
                            biz_zip: formData.cZip,
                            biz_city: formData.cCity,
                            biz_state: formData.cState,
                            biz_country: formData.cCountry,
                            user_name: formData.pName,
                            user_email: formData.pEmail,
                            user_phone: formData.pPhone,
                            user_jobtitle: formData.jobTitle,



                        }
                    }
                }
            );
            if (user) {
                // add message for success
                setMsg("Registraion Successful! Try Login");
                // console.log(user);


            } if (error) {
                //add error
                // console.log(error);

                setError("User already registered. Try Login");

            }

        }





    };
    

    const FormTitles = ["Company Details", "Company Address", "Contact Details", "Sign Up"];

    const PageDisplay = () => {
        if (page === 3) {
            return <SignUp_Info SetMsg={setMsg} setError={setError} formData={formData} setFormData={setFormData} />
        } else if (page === 0) {
            return <Company_Details formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <Company_Add formData={formData} setFormData={setFormData} />
        } else if (page === 2) {
            return <ContactDetail formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div className='form w-full min-h-screen h-full bg-gray-200 flex flex-col items-center justify-center font-Poppins'>
            <Link to={"/"}>
                <img className='absolute top-3 left-3' src={logo} alt="tandem_img" />
            </Link>
            <div className='progressbar w-[308px] tab:w-[353px] lap:w-[388px] mb-10 border border-blue-500 rounded'>
                <div className={`bg-blue-600 h-3 flex items-center justify-center text-white text-[10px] duration-1000 ${page === 0 ? "w-1/4" : page === 1 ? "w-2/4" : page === 2 ? "w-3/4" : "w-full"}`}>
                    Step {page === 0 ? "1 of 4" : page === 1 ? "2 of 4" : page === 2 ? "3 of 4" : "4 of 4"}
                </div>
            </div>
            <form onSubmit={handleSubmit} className='form-container flex flex-col justify-between w-fit min-h-[450px] bg-white py-4 px-8 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <div className='header text-2xl text-center font-bold mb-8'>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className='body mb-5'>{PageDisplay()}</div>

                {/* Error message */}
                {
                    error && <Alert
                        className='w-60 tab:w-72 lap:w-80 mb-7 h-fit'
                        message={error}
                        type="error"
                        showIcon
                        closable
                        onClose={() => setError("")}
                    />

                }

                {
                    msg && <Alert
                        className='w-60 tab:w-72 lap:w-80 mb-7 h-fit'
                        message={msg}
                        type="success"
                        showIcon
                        closable
                        onClose={() => setMsg("")}
                    />
                }

                <div className='footer flex justify-center items-center'>
                    <button
                        className={`${page == 0 ? "hidden" : ""} py-0.5 border border-1 border-blue-800 w-24 rounded-lg bg-blue-700 hover:bg-blue-600 text-white mr-5`}
                        // disabled={page == 0}
                        type="button"
                        onClick={() => {
                            setPage((currPage) => currPage - 1)
                        }}
                    >Prev</button>
                    <button
                        className={`py-0.5 border border-1 border-blue-800 w-24 rounded-lg bg-blue-700 hover:bg-blue-600 text-white `}
                        type="submit"
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                signUp();

                                
                            }

                           
                        }}
                    >{page == FormTitles.length - 1 ? "Submit" : "Next"}</button>

                </div>
            </form>
            <div className='text-sm text-center mt-4'>
                Already have an account? <Link className='hover:text-blue-500 duration-500' to="/login">Login here!</Link>
            </div>
        </div>
    )
}

export default SignUp_Form