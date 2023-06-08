import { useState, useEffect } from 'react';
import Dash_sidebar from '../components/Dash_sidebar';
import Emp_list from '../components/Emp_list'
import { supabaseEmp } from '../supabase/emp';
import { supabase } from '../supabase/business';
import { useAuth } from '../context/AuthProvider';
import { IoMdCloseCircleOutline } from "react-icons/io";
import Loading from "../components/Loading"
import Confirmation_Pop from '../components/Confirmation_Pop'


const Dashboard = () => {

    const { user } = useAuth();
    const [addEmpPop, setAddEmpPop] = useState(false);
    const [fetchUpadte, setFetchupdate] = useState(false)
    const [loading, setLoading] = useState(false)
    const [fetch, setFetch] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [searchData, setSearchData] = useState([])
    const [searchClose, setSearchClose] = useState(false)
    const [fetchdata, setFetchData] = useState(true)
    const [nodata, setNoData] = useState(true)
    const [temp, setTemp] = useState([])
    const [render,setRender]=useState(true)
    const [empDetail, setEmpDetail] = useState({
        name: "",
        email: "",
        phone: "",
        job: "",
        plan: "",
        salary: ""
    })
    //emp count function start
    const [count, setCount] = useState("")



    //--------feetching data from user-------------

    useEffect(function () {

        fetchh();

        async function fetchh() {

            const { data, error } = await supabaseEmp
                .from('emp')
                .select()
                .eq("biz_id", user.id)

                //for showing new data upper
                .order("id", { ascending: false })


            if (data) {
                // console.log(data);

                setFetch(data);
                setCount(data.length)


                // setFetchupdate(!fetchUpadte)

                //emp count function end
                // console.log(setCount);
            }
        }
    }, [fetchUpadte,render])

    useEffect(() => {
        empcounttotal()
        async function empcounttotal() {
            const { error } = await supabase
                .from("biz_user_db")
                .update({ emp_total: count })
                .eq("biz_id", user.id)
            if (error) {
                console.log(error)
            }
        }
    }, [count])
    useEffect(function () {
        fetchdatatoshow();

        async function fetchdatatoshow() {

            const { data, error } = await supabaseEmp
                .from('emp')
                .select()
                .eq("biz_id", user.id)

                //for showing new data upper
                .order("id", { ascending: false })


            if (data) {
                setTemp(data)
                setFetchData(!fetchdata)
            }
        }
    }, [])


    //--------feetching data from user end-------------




    //---------taking input from user------------------------


    function handleChange(e) {
        const { name, value } = e.target;
        setEmpDetail((prev) => {
            return { ...prev, [name]: value }
        })



    }
    //---------taking input from user end-------------------
    //------------------------------delete--------------
    async function deleteItem(id) {
        console.log(id);
        // console.log(id);
        setLoading(true)


        const { error } = await supabaseEmp.from('emp').delete().eq('id', id)

        if (!error) {

            setTimeout(() => {
                setFetch(items => {
                    return items.filter((it) => it.id !== id)
                })
                setFetchupdate(!fetchUpadte)
                setLoading(false)
            }, 700)

            // window.location.reload();
        } else if (error) {
            // console.log(error);


        }


    }

    //----------------------------delete end------------
    function update() {
        //console.log("hello");
        setFetchupdate(!fetchUpadte)


    }

    //inserting data------------------------------------------------------

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await supabaseEmp
            // setLoading(true)
            .from('emp')
            .insert({
                name: empDetail.name,
                email: empDetail.email,
                phone: empDetail.phone,
                job_title: empDetail.job,
                plan: empDetail.plan,
                salary: empDetail.salary,
                biz_id: user.id,
            })
            .select()
        if (data) {
            //console.log(data);


            setFetchupdate(!fetchUpadte)
            setEmpDetail({
                name: "",
                email: "",
                phone: "",
                job: "",
                plan: "",
                salary: ""
            })
            setAddEmpPop(false)




            // window.location.reload();
        }
    }
    //-------------------inserting data end--------------------------------
    function handleClick() {
        setSearchData("");

    }

    function handleSearch(e) {
        setSearchInput(e.target.value)
        setSearchClose(true)
        setSearchData("");
    }


    function Search(e) {
        // console.log(e);
        if (e.key === "Enter") {
            setLoading(true)


            const main = async () => {

                const { data, error } = await supabaseEmp
                    .from('emp')
                    .select()
                    .textSearch("fts", searchInput)
                    .eq("biz_id", user.id)
                // .eq("name","mohit")

                if (data.length == 0) {
                    // console.log("no data found")
                    setTimeout(() => {

                        setLoading(false)
                    }, 700)
                }
                else if (data) {
                    setTimeout(() => {

                        setSearchData(data)
                        setLoading(false)
                    }, 700)

                    // console.log(data)
                }
                else if (error) {
                    // console.log(error)
                }
            }
            main()


        }

    }



    

    




    return (
        <div className='bg-gray-100 font-Poppins'>
            {loading && <Loading />}

           

            {/* Dashboard */}
            <div className="ml-60 pb-3 min-h-screen h-full">
                <h1 className="text-xl font-semibold border border-1 border-gray-300 bg-white pl-4 py-4 shadow-[rgba(21,_21,_21,_0.5)_0px_0px_2px] font-SourceSansPro">
                    Dashboard
                </h1>

                {/* total employee number & Search */}
                <div className="">
                    <div className="flex justify-between mt-10 ml-10">
                        <div className="bg-white px-3 py-4 w-4/12 border border-1 border-gray-300 rounded-md flex justify-between">
                            <p className=" text-[#28313B] text-sm  ">Total Employees</p>
                            <span className="">{count}</span>
                        </div>
                        <div className='flex items-center justify-between w-[450px] px-4 mr-20 bg-white border border-1 border-gray-300 rounded-md'>
                            <input
                                className='bg-transparent h-9 outline-none w-[calc(100%-26px)]'
                                type="text"
                                value={searchInput}
                                placeholder="Search:"
                                onKeyDown={Search}
                                onChange={handleSearch}
                                name="search"
                                id="search"

                            />
                            {
                                searchInput && <button onClick={() => { setSearchInput(""); handleClick() }}>
                                    <IoMdCloseCircleOutline className='text-lg text-gray-600 font-semibold' />
                                </button>
                            }
                        </div>

                    </div>
                    <button
                        onClick={() => setAddEmpPop(true)}
                        className="font-semibold ml-10 bg-[#028820] hover:bg-[#2c8f41] w-36 mt-4 text-white py-1 rounded-md "
                        type="submit"
                        id="add"
                    >
                        + Add
                    </button>

                    {/* Employee list */}
                    <h2 className="text-base text-[#687E96] font-semibold border border-1 border-gray-300 rounded-t-md bg-white my-5 ml-10 mt-10 mr-20 pl-4 py-4">
                        Employee List
                    </h2>


                    {!fetchdata && !fetch.length ?

                        <div className="mx-auto flex flex-col items-center">
                            <p className="text-[#BBBBBB] mt-32 text-center text-xl">
                                Empty
                                <br />
                                No employee data available
                            </p>
                            <button
                                onClick={() => setAddEmpPop(true)}
                                className="w-fit px-5 py-2 mt-14 rounded-md text-white text-xs font-semibold bg-[#424770] hover:bg-[#4c5281]"
                                type="submit"
                                id="add2"
                            >
                                Add Employee
                            </button>
                        </div>
                        :
                        nodata && fetch.length
                            ?
                            <div>
                                {searchData.length ? <div>
                                    {searchData.map((item, index) => (

                                        <Emp_list
                                            onClick={ deleteItem}
                                            updatee={update}
                                            key={index}
                                            id={item.id}
                                            name={item.name}
                                            job={item.job_title}
                                            salary={item.salary}
                                            render={render}
                                            setRender={setRender}
                                            plan={item.plan} />
                                    ))}

                                </div> : <div>
                                    {fetch.map((item, index) => (

                                        <Emp_list
                                            onClick={ deleteItem}
                                            updatee={update}
                                            render={render}
                                            setRender={setRender}
                                            key={index}
                                            id={item.id}
                                            name={item.name}
                                            job={item.job_title}
                                            salary={item.salary}
                                            plan={item.plan} />
                                    ))}

                                </div>}

                            </div>
                            : ""




                    }


                    {/* Add Employee Popup */}
                    {
                        addEmpPop ? (
                            <div className='fixed top-0 right-0 flex justify-center items-center w-[calc(100%-15rem)] h-screen bg-gray-200/75'>
                                {loading && <Loading />}
                                <div className='w-[600px]'>

                                    <div className="text-left my-6 bg-white py-14 px-20 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                        <form onSubmit={handleSubmit}>
                                            <div className="grid grid-cols-2 space-y-1 place-items-start place-content-center ">
                                                <h2 className="text-base font-semibold underline col-span-2 text-left pb-5">
                                                    Add Employee
                                                </h2>
                                                <p className="text-[#151515]">Name:<span className='text-red-600 text-xl'>*</span> </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="text"
                                                    name="name"
                                                    onChange={handleChange}
                                                    value={empDetail.name}
                                                    required
                                                />
                                                <p className="text-[#151515]">Email:<span className='text-red-600 text-xl'>*</span> </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={empDetail.email}
                                                    required
                                                />
                                                <p className="text-[#151515]">Phone Number : </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="tel"
                                                    name="phone"
                                                    onChange={handleChange}
                                                    value={empDetail.phone}
                                                />
                                                <p className="text-[#151515]">Job Title:<span className='text-red-600 text-xl'>*</span> </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="text"
                                                    name="job"
                                                    onChange={handleChange}
                                                    value={empDetail.job}
                                                    required
                                                />
                                                <p className="text-[#151515]">Salary : </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="number"
                                                    name="salary"
                                                    value={empDetail.salary}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <p className="text-[#151515]">Subscription Plan:<span className='text-red-600 text-xl'>*</span> </p>
                                                <select
                                                    id="type-signup"
                                                    name='plan'
                                                    required
                                                    onChange={handleChange}
                                                    className="text-sm rounded-md px-2 capitalize font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block border-2 border-gray-300 w-full h-8 m-auto"
                                                >
                                                    <option value="">
                                                        Select Plan
                                                    </option>
                                                    <option value="basic" className="text-gray-700 font-Poppins">Basic</option>
                                                    <option value="Plus" className="text-gray-700 font-Poppins">Plus</option>
                                                    <option value="Premium" className="text-gray-700 font-Poppins">Premium</option>
                                                </select>
                                                <div className="col-start-2">
                                                    <div className="flex mt-10">
                                                        <button
                                                            className="bg-[#11BF38] hover:bg-[#13cc3b] text-white w-fit px-8 h-9 mr-2 rounded-md font-Poppins tracking-wide"
                                                            type="submit"
                                                            name="reg_next"
                                                        // onClick={close}

                                                        >
                                                            Add
                                                        </button>
                                                        <button
                                                            onClick={() => setAddEmpPop(false)}
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




                    {/* <AddEmpPop trigger={popUp} setTrigger={setPopUp}/> */}
                    {/* <Popup trigger={popUp} setTrigger={setPopUp}>
                        <h1>Hello</h1>
                        <p>This is popup</p>
                    </Popup> */}

                </div>
            </div>

        </div>
    )
}

export default Dashboard