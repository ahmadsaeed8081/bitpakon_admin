import { Link, useLocation } from "react-router-dom";
import Button from "../Button";

import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useContractReads, useContractWrite } from "wagmi";

const Sidebar = ({ side, closeSidebar }) => {



  const { open, close } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  
  const location = useLocation();
  const isActive = (route) => location.pathname.includes(route);



  return (
    <div
      className={`fixed top-0  shadow-xl ${side} sm:left-0 w-64 h-screen flex flex-col justify-between bg-black z-10 transition-all`}
    >
    
      <div >
      {/* <i
        className="bi bi-x-lg absolute bg-orange w-7 h-4 text-white top-12 right-4  cursor-pointer text-lg"
        onClick={closeSidebar}
      ></i> */}
       <div className="  p-5">
       <h1 className=" text-white text-4xl font-medium">
          <img
            src={require("../../assets/image/logo.png")}
            className="    mx-auto"
            alt=""
          />
          {/* Logo */}
        </h1>
       </div>
      </div>

      <ul className="">
        <li className="px-4 cursor-pointer  gap-4 font-semibold  transition-all py-3 text-white flex items-center  hover:text-white">
          <div>
            <img src={require('../../assets/image/uit_create-dashboard.png')} alt="" />
          </div>
          <Link to="/" className={` ${isActive('/')?' text-[#ECD35F]':' text-white'} text-lg capitalize`}>
            Dashboard
          </Link>
        </li>
        <li className="px-4 cursor-pointer  gap-4 font-semibold  transition-all py-3 text-white flex items-center  hover:text-white">
          <div>
            <img src={require('../../assets/image/identity-card 1.png')} alt="" />
          </div>
          <Link to="/update-values" className={`  ${isActive('/update-values')?' text-[#ECD35F]':''} text-lg capitalize`}>
            Update Value
          </Link>
        </li>
        <li className="px-4 cursor-pointer gap-4   font-semibold  transition-all py-3 text-white flex items-center  hover:text-white">
          <div>
            <img src={require('../../assets/image/radix-icons_update.png')} alt="" />
          </div>
          <Link to="/swap-approval" className={` ${isActive('/swap-approval')?' text-[#ECD35F]':' text-white'} text-lg capitalize`}>
            Swap Approval
          </Link>
        </li>

      </ul>

      <div className=" flex justify-center mb-5">
        <Button  Icons={<img src={require('../../assets/image/logout 1.png')} className=" w-7" alt="" />}          
        
        onClick={() => open()}

        label={isConnected? "Disconnect": "Connect"}
        
        className={'  text-[#1C0057] font-semibold rounded-xl bg-button-gradient2 w-40'} />
      </div>
    </div>
  );
};
export default Sidebar;
