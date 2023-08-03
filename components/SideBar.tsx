import { useState } from "react";
import PropTypes from "prop-types";
import {
  AiFillEnvironment,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  BsSearch,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

function SideBar({ open }: { open: boolean }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", icon: <RiDashboardFill /> },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", spacing: true, icon: <BsFillImageFill /> },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "submenu 1" },
        { title: "submenu 1" },
        { title: "submenu 1" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Profile", spacing: true, icon: <BsPerson /> },
    { title: "Settings", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];
  return (
    <div
      className={`bg-white p-4 pt-8 ${
        open ? "w-72" : "w-16"
      } duration-500 min-h-screen`}
    >
      <div className="inline-flex">
        <AiFillEnvironment className="bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-3" />
        <h1
          className={`text-green-500 origin-left font-medium text-2xl ${
            !open && "hidden"
          }`}
        >
          YNCU
        </h1>
      </div>

      <div
        className={`flex items-center rounded-md bg-slate-500 mt-6 ${
          !open ? "px-1.5" : "px-4"
        } py-2`}
      >
        <BsSearch
          className={`text-green-500  text-xl block float-left cursor-pointer ${
            open && "mr-2"
          } `}
        />

        <input
          type={"search"}
          placeholder="Search"
          className={`text-base bg-transparent w-full text-green-500 focus:outline-none ${
            !open && "hidden"
          }`}
        />
      </div>

      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <div key={index}>
            <li
              key={index}
              className={`text-green-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-500 rounded-md ${
                menu.spacing ? "hover: mt-9" : "mt-2"
              }  `}
            >
              <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <RiDashboardFill />}
              </span>
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                {menu.title}
              </span>

              {menu.submenu && open && (
                <BsChevronDown
                  className={`${submenuOpen && "rotate-180"}`}
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                />
              )}
            </li>
            {menu.submenu && submenuOpen && open && (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li
                    key={index}
                    className="text-green-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-500 rounded-md"
                  >
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

SideBar.propTypes = {};

export default SideBar;
