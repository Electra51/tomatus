
import {IoIosNotificationsOutline} from "react-icons/io";
import img from "../../../assets/profile.png"
import { HiOutlineClipboardList } from "react-icons/hi";
import { PiLockKeyOpen } from "react-icons/pi";
import {AiOutlineLogout} from "react-icons/ai"
const Navbar = () => {
   
  return (
    <div className="flex justify-between items-center px-5 pt-[9px] pb-[9px] mb-4 bg-[#32363F] border-l border-gray-400" >
      <div className="relative ml-4">
        <input
          className="appearance-none border pl-10 border-none  hover:border-gray-400 transition-colors rounded-full w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-[#243587] focus:border-[#243587] focus:shadow-outline bg-[#2B2E36]"
          id="username"
          type="text"
          placeholder="Search..."
        />

        <div className="absolute left-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

                  
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="">
        <IoIosNotificationsOutline size={23} className="text-TextColor font-semibold"/>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-componentColor rounded-none text-NormalTextColor  shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-6 rounded-full">
          <img src={img} alt="profile" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-componentColor rounded-none w-52 text-NormalTextColor ">
        <li>
          <a className="link ">
           <HiOutlineClipboardList size={23} className="" /> Menu List
           
          </a>
        </li>
        <li><a className="link"> <PiLockKeyOpen size={23}/>Lock Screen</a></li>
        <li><a className="link"><AiOutlineLogout size={23}/>Logout</a></li>
      </ul>
    </div>
  </div>

               </div>
 
  );
};

export default Navbar;