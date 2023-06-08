import { useEffect, useRef, useState } from 'react'
import user_img from '../assets/images/user_img.png'
import { MdOutlineDashboard, MdContactMail } from "react-icons/md";
import { BsFillBuildingFill, BsPeopleFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { supabase } from '../supabase/business';

const Dash_sidebar = () => {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  //user define
  const { user } = useAuth();

  var todayDate = new Date().toISOString().slice(0, 10);
  const signOut = () => supabase.auth.signOut();


  useEffect(() => {
    akhil();

  }, [])
  //get name and id from biz table

  async function akhil() {

    let { data: newdata } = await supabase
      .from('biz_user_db')
      .select("*")
      .eq("biz_id", user.id)
   // console.log(newdata[0].biz_name);
    //console.log(newdata[0].id)

    if (newdata) {
      const bizname = newdata[0].biz_name;
      const bizid = newdata[0].id;
      setName(bizname)
      setData("122112" + bizid)
      // console.log(newdata)
    }

  }




  return (
    <div>
      <nav
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-60 h-screen block"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#15213A]">
          <ul className="space-y-2 text-white">
            {/*        Profile */}
            <li>
              <div className="user_profile grid grid-col-2 text-sm">
                <img
                  className="row-span-2 flex-shrink-0 w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  src={user_img}
                  alt="user_img"
                />
                <p className="business_name col-start-2 col-end-7">{name}</p>
                <p>
                  <span className="acc-id">{data}</span>
                </p>
              </div>
            </li>

            <li>
              <div className="d&t bg-white text-[#4C3CCE] text-center text-sm py-1 rounded-full mx-4">
                <p>{todayDate}</p>
              </div>
            </li>

            <li>
              <NavLink
                to="/"

                className="flex items-center p-2 mt-6 text-base font-normal text-gray-500 hover:text-white active:text-white active:font-semibold rounded-lg hover:bg-blue-900 active:bg-[#4C3CCE]"
              >
                <MdOutlineDashboard className="flex-shrink-0 w-6 h-6 transition duration-75" />
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/business-profile"
                className="flex items-center p-2 text-base font-normal text-gray-500 hover:text-white active:text-white active:font-semibold rounded-lg  hover:bg-blue-900 active:bg-[#4C3CCE]"
              >
                <BsFillBuildingFill className="flex-shrink-0 w-6 h-6 transition duration-75" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Business Profile
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/billing"
                className="flex items-center p-2 text-base font-normal text-gray-500 hover:text-white active:text-white active:font-semibold rounded-lg  hover:bg-blue-900 active:bg-[#4C3CCE]"
              >
                <FaRegMoneyBillAlt className="flex-shrink-0 w-6 h-6 transition duration-75" />
                <span className="flex-1 ml-3 whitespace-nowrap">Billing</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/refer"
                className="flex items-center p-2 text-base font-normal text-gray-500 hover:text-white active:text-white active:font-semibold rounded-lg  hover:bg-blue-900 active:bg-[#4C3CCE]"
              >
                <BsPeopleFill className="flex-shrink-0 w-6 h-6 transition duration-75" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Refer &amp; Earn
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact-us"
                className="flex items-center p-2 text-base font-normal text-gray-500 hover:text-white active:text-white active:font-semibold rounded-lg  hover:bg-blue-900 active:bg-[#4C3CCE]"
              >
                <MdContactMail className="flex-shrink-0 w-6 h-6 transition duration-75" />
                <span className="flex-1 ml-3 whitespace-nowrap">Contact Us</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={signOut}
                to="/Login"
                className="flex items-center p-2 text-base font-normal text-gray-500 hover:text-white active:text-white active:font-semibold rounded-lg  hover:bg-blue-900 active:bg-[#4C3CCE]"
              >
                <RiLogoutBoxRFill className="flex-shrink-0 w-6 h-6 transition duration-75" />
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Dash_sidebar