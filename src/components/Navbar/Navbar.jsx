import {
  FaBars,
  FaBell,
  FaUser,
  FaSearch,
  FaMicrophone,
  FaCamera,
  FaVideo,
} from "react-icons/fa";

import { AiFillYoutube, AiOutlineYoutube } from "react-icons/ai";

import { useEventHandler } from "../../utils/useEventHandler";

export function Navbar() {
  const { sidebarTogglerHandler, sidebarIsOpen } = useEventHandler();
  return (
    <>
      <nav
        className={`flex justify-between w-full dark:bg-gray-900 ${
          sidebarIsOpen && "col-start-1"} col-start-1 transition-["grid-template-colums"] col-end-7 py-3 min-h-[calc(10vh-10px)]`}
      >
        <ul className="flex items-center ml-10 gap-5 text-white">
          <li onClick={() => sidebarTogglerHandler()}>
            <i className="text-2xl ">
              {" "}
              <FaBars />{" "}
            </i>{" "}
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <i className="text-3xl  text-red-500">
              {" "}
              <AiFillYoutube />{" "}
            </i>{" "}
            Youtube{" "}
          </li>
        </ul>
        <ul className="flex gap-3 items-center text-white justify-center">
          <form>
            <div className="flex items-center">
              <input
                placeholder="Search"
                className="text-white bg-black w-[120%] px-5 py-2 border-[.5px] border-gray-100 "
              />
              <button className="p-3 px-4 bg-gray-700 ">
                <i>
                  <FaSearch />{" "}
                </i>{" "}
              </button>
            </div>
          </form>
          <i className="text-xl bg-gray-800 rounded-full p-2">
            {" "}
            <FaMicrophone />{" "}
          </i>
        </ul>
        <ul className="flex gap-5 items-center text-xl mr-10 dark:text-white">
          <li>
            {" "}
            <i>
              <FaVideo />
            </i>{" "}
          </li>
          <li>
            {" "}
            <i>
              <FaBell />{" "}
            </i>{" "}
          </li>
          <li>
            {" "}
            <i>
              <FaUser />
            </i>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
}
