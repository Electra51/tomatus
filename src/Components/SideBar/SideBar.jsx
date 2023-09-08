/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import { SlBadge } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TbBrandStorybook} from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { PiLockKeyOpen } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";
import { MdMenu, MdOutlineDriveFolderUpload, MdOutlineRestaurantMenu } from "react-icons/md";
import { NavLink, useLocation,  } from "react-router-dom";
import logo from "../../assets/Navlogo.png";

const Sidebar = () => {

  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "Menu Layout",
      icon: TbBrandStorybook,
      menus: ["Menu Layout -01", "Menu Layout -02", "Menu Layout -03"],
    }
  ];

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-bodyColor text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed h-screen"
      >
        {/* top logo */}
        <div className="flex items-center gap-2.5 font-medium py-3 m-0" style={{padding:"0 0"}}>
            <div className="flex justify-between items-center px-5 py-3 mb-4 bg-componentColor" >
                   <div style={{display: open ? "block px-5 py-3" : "none px-5 py-3"}} className="logo"> <img src={logo} alt='logo'/></div>
                   <div style={{marginLeft: open ? "40px" : "-14px",padding:open?"8px":"8px"}} className="bars">
                       <MdMenu size={25} className="text-white"  onClick={() => {
            setOpen(!open);
          }}/>
                   </div>
               </div>
          
        </div>

        <div className="flex flex-col h-full bg-componentColor">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[77%] h-[70%]">
              {(open || isTabletMid) && (
              <div className="mt-3">
                <p className="text-TextColor inline-block mb-2">
                 MAIN
                </p>
              </div>
            )}

            
            <li>
              <NavLink to={"/"} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
               DashBoard
              </NavLink>
            </li>
             {(open || isTabletMid) && (
              <div className="">
               
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li>
              <NavLink to={"/orderList"} className="link">
                <HiOutlineClipboardList size={23} className="min-w-max" />
               Order List
              </NavLink>
            </li>
            <li>
              <NavLink to={"/chef"} className="link">
                <MdOutlineRestaurantMenu size={23} className="min-w-max" />
                Chef Page
              </NavLink>
            </li>
             <li>
              <NavLink to={"/chef"} className="link">
                <SlBadge size={23} className="min-w-max" />
                Customer Reviews
              </NavLink>
            </li>
             <li>
              <NavLink to={"/chef"} className="link">
                <MdOutlineDriveFolderUpload size={23} className="min-w-max" />
                Upload Menu
              </NavLink>
            </li>

            {(open || isTabletMid) && (
              <div className="mt-3">
                <p className="text-TextColor inline-block mb-2">
                 AUTHENTICATION PAGES
                </p>
               
              </div>
            )}
            <li>
              <NavLink to={"/settings"} className="link">
                <FaRegUserCircle size={23} className="min-w-max" />
                Login
              </NavLink>
            </li>
              <li>
              <NavLink to={"/settings"} className="link">
                <PiLockKeyOpen size={23} className="min-w-max" />
                Lock Screen
              </NavLink>
            </li>
            
          </ul>
          {open && (
            
              <div className="flex p-2 mt-5 items-center justify-between">
             <small className="text-NormalTextColor">© 2018 <span className="text-TextColor">Tomatus.</span> All Right Reserved</small>
                
              
              </div>
            
          )}
        </div>
       
      </motion.div>
      <div className="m-3 md:hidden " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;