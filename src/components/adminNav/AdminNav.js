import { FiMenu } from "react-icons/fi";
import Input from "../Input";
import { FaSearch } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
const AdminNav = ({ openSidebar, side, closeSidebar,title }) => {
  return (
    <nav
      className={`fixed  top-0 right-0    bg-[#1A1A1A] ${
        side === "left-0 md:-left-64" ? "left-0" : "left-0 md:left-64"
      }`}
    >
      <div  className="w-full border-b flex flex-row-reverse sm:flex-row justify-between items-center p-6">
        <div className=" flex items-center gap-4">

          <div className=" md:hidden block">
          {side === "left-0 md:-left-64" ? (
            <FiMenu size={30} onClick={closeSidebar} color="white" />
          ) : (
            <FiMenu size={30} color="white" onClick={openSidebar} />
          )}
          </div>
        


          <h1 className=" text-[#ECD35F] font-semibold hidden sm:block text-2xl">{title}</h1>

         
        </div>

        <div className=" flex items-center gap-5">
      
          <div>
            <img
              src={require("../../assets/image/profile.png")}
              className=" w-12 h-12 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default AdminNav;
