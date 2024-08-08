import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RiHome5Fill,
  RiMailFill,
  RiUserSearchLine,
  RiLogoutBoxFill,
} from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox, FaUser } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from "../assets/logo.svg";

function SideBar({ onMenuItemClick }: any) {
  const [selectedItem, setSelectedItem] = useState("/");
  const [isHovered, setIsHovered] = useState(false);
  const [notificationCounts] = useState({
    mail: 0, // Example counts, replace with actual data
    inbox: 4,
    send: 0,
    stack: 0,
  });
  const navigate = useNavigate();

  const handleMenuItemClick = (path: string) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="no-scrollbar h-screen w-16 flex flex-col py-6 border-r-2 dark:bg-[#101113] bg-white dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10 justify-between items-center">
      <div className="rounded-xl">
        <img
          src={logo}
          className="h-8 rounded-xl object-left overflow-visible"
          alt="Logo"
          onClick={() => handleMenuItemClick("/")}
        />
        
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-5">
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/")}
        >
          <RiHome5Fill />
        </div>
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/search" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/search")}
        >
          <RiUserSearchLine />
        </div>
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/mail" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/mail")}
        >
          <RiMailFill />
          {notificationCounts.mail > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {notificationCounts.mail}
            </span>
          )}
        </div>
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/send" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/send")}
        >
          <IoIosSend />
          {notificationCounts.send > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {notificationCounts.send}
            </span>
          )}
        </div>
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/stack" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/stack")}
        >
          <SiElasticstack />
          {notificationCounts.stack > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {notificationCounts.stack}
            </span>
          )}
        </div>
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/inbox" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/inbox")}
        >
          <FaInbox />
          {notificationCounts.inbox > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {notificationCounts.inbox}
            </span>
          )}
        </div>
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/stacks" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/stacks")}
        >
          <IoStatsChartSharp />
        </div>
      </div>

      <div
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-white bg-green-500 p-2 rounded-full">MS</div>
        {isHovered && (
          <div className="absolute overflow-visible bottom-0 left-full ms-1 mt-2 bg-gray-500 border border-gray-200 rounded-md shadow-lg w-100">
            <div
              className="flex items-center p-2 cursor-pointer hover:bg-gray-300"
              onClick={() => alert("My Profile")}
            >
              <FaUser className="mr-2" /> <span>Profile</span>
            </div>
            <div
              className="flex items-center p-2 cursor-pointer hover:bg-gray-300"
              onClick={handleLogout}
            >
              <RiLogoutBoxFill className="mr-2" /> <span>LogOut</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
