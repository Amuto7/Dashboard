import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {

    const {setColor,setMode, currentMode, currentColor, setThemeSettings} = useStateContext()
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(154,171,180)", borderRadius: "50%" }}
            className=" text-2x1 p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="border-t-1  border-color p-4 ml-4 flex-col"> 
          <p className="font-semibold text-xl">Theme Option</p>
          <div className="mt-4">
            <input
              type="radio"
              name="theme"
              id="Light"
              value="light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'light'}
            />
            <label htmlFor="Light" className="cursor-pointer ml-2 text-md ">
            Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              name="theme"
              id="Dark"
              value="dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'dark'}
            />
            <label htmlFor="Dark" className="cursor-pointer ml-2 text-md">
            Dark
            </label>
          </div>
        </div>
        <div className="border-t-1 border-color p-4 ml-4 ">
          <p className="font-semibold text-xl">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((ele, i) => (
              <TooltipComponent key={i} content={ele.name} position="TopCenter">
                <div
                  className="mt-2 relative flex gap-5 items-center cursor-pointer"
                  key={ele.color}
                >
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: ele.color }}
                    onClick={()=>setColor(ele.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        ele.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
