import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tooltip, TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/contextProvider";

// Navbutton component
const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    currentColor,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  // useEffect(() => {
  //   if (screenSize <= 900) {
  //     setActiveMenu(false);
  //   } else {
  //     setActiveMenu(true);
  //   }
  // }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative items-center ">
      <div className="flex items-center">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
        <Link
          to="/"
          // onClick={() => setActiveMenu(true)}
          className="items-center gap-3 ml-3  flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900 "
        >
          <SiShopware /> <span>Shoppy</span>
        </Link>
      </div>

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />

        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          dotColor="#03C907"
          color={currentColor}
          icon={<BsChatLeft />}
        />

        {/* Notification */}
        <NavButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          dotColor="#03C907"
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        {/* Profile */}
        <TooltipComponent
          content="Profile"
          title="Profile"
          position="BottomCenter"
        >
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={avatar}
              alt="user Profile"
              className="rounded-full w-8 h-8"
            />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>
              <span className=" text-gray-400 ml-1 text-14 font-bold ">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userprofile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
