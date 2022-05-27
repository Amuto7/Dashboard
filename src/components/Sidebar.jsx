import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { links } from "../data/dummy";

const Sidebar = () => {
  const {activeMenu,setActiveMenu,screenSize,currentColor} = useStateContext();

  const handleClosesSideBar = () => {
    if (activeMenu && screenSize <= 900 ) {
      setActiveMenu(false)
    }
  }
  
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-mb m-2'
    const normalLink = 'flex items-center gap-5  pt-3 pb-2.5 rounded-lg text-mb text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-blue-200 m-2 pl-3 '

    return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className=" flex justify-between items-center ">
            <Link
              to="/"
              onClick={handleClosesSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Dash</span>
            </Link>
            <TooltipComponent content={"Menu"} position="ButtonCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(e => !e)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((items) => (
              <div key={items.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">
                  {items.title}
                </p>
                {items.links.map((ele) => (
                  <NavLink
                    to={`/${ele.name}`}
                    key={ele.name}
                    onClick={handleClosesSideBar}
                    style={({isActive})=>({backgroundColor: isActive ? currentColor :''})}
                    className={({isActive}) => isActive ? activeLink : normalLink }> 
                         
                         {ele.icon}
                        <span className="capitalize">{ele.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
