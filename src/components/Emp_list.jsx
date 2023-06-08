import { useState } from 'react';
import user_img from '../assets//images/user_img.png'
import { supabaseEmp } from '../supabase/emp';
import Loading from './Loading';
import Confirmation_Pop from './Confirmation_Pop'

const Emp_list = ({ name, job, salary, plan, onClick, id, render,setRender }) => {


    const [updatePop, setUpdatePop] = useState(false);
    const [loading, setLaoding] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [empData, setEmpData] = useState({

        job_title: "",
        plan: "",
        salary: "",
    })


    function handleChange(e) {
        const { name, value } = e.target;
        setEmpData((prev) => {
            return { ...prev, [name]: value }
        })
        //console.log(empData);

    }

    async function updateData(e) {
        e.preventDefault();
        setLaoding(true)




        const { data, error } = await supabaseEmp
            .from('emp')
            .update({
                salary: empData.salary,
                job_title: empData.job_title,
                plan: empData.plan,

            })
            .eq("id", id)
            .select()

        if (data) {
            //console.log(data)
            setTimeout(() => {
                setRender(!render)
                setLaoding(false)
                setUpdatePop(false)
                updatee();
            }, 700)


        } else {
            // console.log(error);
        }


    }


    async function handleClick(id) {


        const { data, error } = await supabaseEmp
            .from('emp')
            .select()
            .eq("id", id)
            .single()

        if (data) {
            setEmpData(data)
            setUpdatePop(true)

        } else {
            // console.log(error);
        }




    }

    const handleConfirm = () => {
        console.log(id)
        // Handle confirmation logic
       onClick(id)
        
        
        setShowConfirmation(false);
    };

    const handleCancel = () => {
        setShowConfirmation(false);
    };
   


    return (

        <div className="flex justify-between items-center h-28 bg-white my-5 ml-10 mr-20 py-4 pl-3 pr-6 border border-1 border-gray-300 rounded-md text-sm">
            <div className="left flex items-center">
            {
                showConfirmation &&
                <Confirmation_Pop
                    message="Are you sure you want delete this Employee ?"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            }
                <img
                    className="row-span-2 flex-shrink-0 w-16 h-16 mx-5 justify-between text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                    src={user_img}
                    alt="user_img"
                />
                <div className="flex flex-row">
                    <div className='grid grid-cols-1'>
                        <p className="text-[#28313B] font-semibold columns-[80px] h-5">Name: </p>
                        <p className="text-[#28313B] font-semibold columns-[80px] h-5">Job Title: </p>
                        <p className="text-[#28313B] font-semibold columns-[80px] h-5">Salary: </p>
                        <p className="text-[#28313B] font-semibold columns-[80px] h-5">Plan: </p>
                    </div>
                    <div className='grid grid-cols-1 ml-1'>
                        <span className="text-[#28313B] font-thin capitalize  h-5 columns-[400px]">{name}</span>
                        <span className="text-[#28313B] font-thin capitalize  h-5 columns-[400px]">{job}</span>
                        <span className="text-[#28313B] font-thin capitalize  h-5 columns-[400px]">{salary}</span>
                        <span className="text-[#28313B] font-thin capitalize  h-5 columns-[400px]">{plan}</span>
                    </div>
                </div>

            </div>
            <div className="right flex flex-col space-y-2.5 w-1/12">
                <button
                    onClick={() => handleClick(id)}
                    className="text-[#696969] border border-1 border-gray-300 hover:bg-slate-100 py-0.5 rounded-md"
                    type="submit"
                >
                    Edit
                </button>
                <button
                    className="text-white bg-[#B13308] hover:bg-[#b04e2e] py-0.5 rounded-md"
                    type="submit"
                    onClick={() => {
                        setShowConfirmation(true);
                    }}

                >
                    Delete
                </button>
            </div>

            {/* Edit Employee Popup */}
            {
                updatePop ? (
                    <div className='fixed top-0 right-0 flex justify-center items-center w-[calc(100%-15rem)] h-screen bg-gray-200/75'>
                        {loading && <Loading />}
                        <div className='w-[600px]'>

                            <div className="text-left my-6 bg-white py-14 px-20 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                <form method="post" onSubmit={updateData}>
                                    <div className="grid grid-cols-2 space-y-1 place-items-start place-content-center">
                                        <h2 className="text-base font-semibold underline col-span-2 text-left pb-5">
                                            Update Employee
                                        </h2>
                                        <p className="text-[#151515]">Name: </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="name"
                                            readOnly
                                            value={empData.name}
                                            required
                                        />
                                        <p className="text-[#151515]">Email: </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="email"
                                            name="email"
                                            readOnly
                                            value={empData.email}
                                            required
                                        />
                                        <p className="text-[#151515]">Phone Number : </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="tel"
                                            name="phone"
                                            readOnly
                                            value={empData.phone}
                                        />
                                        <p className="text-[#151515]">Job Title:<span className='text-red-600 text-xl'>*</span> </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="job_title"
                                            onChange={handleChange}
                                            value={empData.job_title}
                                            required
                                        />
                                        <p className="text-[#151515]">Salary : </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="number"
                                            name="salary"
                                            value={empData.salary}
                                            onChange={handleChange}
                                            min="0"

                                        // value={empData.salary}
                                        />
                                        <p className="text-[#151515]">Subscription Plan:<span className='text-red-600 text-xl'>*</span> </p>
                                        <select
                                            required
                                            name='plan'
                                            onChange={handleChange}
                                            className="text-sm rounded-md px-2 capitalize font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block border-2 border-gray-300 w-full h-8 m-auto"
                                        >
                                            <option>
                                                {empData.plan}
                                            </option>
                                            <option value="basic" className="text-gray-700 font-Poppins">Basic</option>
                                            <option value="Plus" className="text-gray-700 font-Poppins">Plus</option>
                                            <option value="Premium" className="text-gray-700 font-Poppins">Premium</option>
                                        </select>
                                        <div className="col-start-2">
                                            <div className="flex mt-10">
                                                <button
                                                    className="bg-[#11BF38] hover:bg-[#13cc3b] text-white w-fit px-5 h-9 mr-2 rounded-md font-Poppins tracking-wide"
                                                    type="submit"
                                                    name="reg_next"
                                                    onClick={updateData}
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => setUpdatePop(false)}
                                                    className="bg-white hover:bg-slate-100 text-[#696969] w-fit px-4 h-9 ml-2 rounded-md font-Poppins tracking-wide border-2 border-gray-300"
                                                    name="cancel"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : ""
            }

            {/* <UpdateEmpPop trigger={updatePop} setTrigger={setUpdatePop} /> */}
        </div>

    )
}

export default Emp_list