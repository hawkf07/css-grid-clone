import { useEventHandler } from "../../utils/useEventHandler";
import {
  FaBars,
  FaBell,
  FaUser,
  FaSearch,
  FaMicrophone,
  FaCamera,
  FaVideo,
  FaHome,
  FaCompass,
  FaSubscribe,
} from "react-icons/fa";

import { AiFillYoutube, AiOutlineYoutube } from "react-icons/ai";
const SidebarList = () => {

  return (
<ul className="flex flex-col items-center w-full">
          <li className="w-full py-3  hover:bg-gray-500/50 flex items-center ">
            {" "}
            <div className="mx-7">
              {" "}
              <i>
                {" "}
                <FaHome className="text-2xl" />{" "}
              </i>{" "}
            </div>{" "}
            <p className="text-md"> Home </p>{" "}
          </li>
          <li className="w-full py-3  hover:bg-gray-500/50 flex items-center ">
            {" "}
            <div className="mx-7">
              {" "}
              <i>
                {" "}
                <FaCompass className="text-2xl" />{" "}
              </i>{" "}
            </div>{" "}
            <p className="text-md"> Explore</p>{" "}
          </li>
          <li className="w-full py-3  hover:bg-gray-500/50 flex items-center ">
            {" "}
            <div className="mx-7">
              {" "}
              <i>
                {" "}
                <FaCompass className="text-2xl" />{" "}
              </i>{" "}
            </div>{" "}
            <p className="text-md"> Shorts</p>{" "}
          </li>
          <li className="w-full py-3  hover:bg-gray-500/50 flex items-center ">
            {" "}
            <div className="mx-7">
              {" "}
              <i>
                {" "}
                <AiFillYoutube className="text-2xl" />{" "}
              </i>{" "}
            </div>{" "}
            <p className="text-md"> Shorts</p>{" "}
          </li>
        </ul>

  )
}

export function Sidebar() {
  const { sidebarTogglerHandler, sidebarIsOpen } = useEventHandler();
  return (
    <>
      <aside
        className={`bg-gray-900 gap-5 overflow-y-scroll child:border-t-[0.5px] child:border-white/[.06] dark:text-white row-start-2 row-span-full flex flex-col ${
          sidebarIsOpen ? "w-64" : "w-0 h-0 hidden"
        }`}
      >
    <SidebarList/>
    <SidebarList/>
    <SidebarList/>
    <SidebarList/>
      </aside>
    </>
  );
}
