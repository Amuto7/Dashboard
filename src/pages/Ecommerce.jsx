import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";

function Ecommerce() {
  const {currentColor,currentMode}= useStateContext()
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat  bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2x1">$77,887,707</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((ele) => (
            <div
              key={ele.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2x1"
            >
              <button
                type="button"
                style={{ color: ele.iconColor, backgroundColor: ele.iconBg }}
                className="text-2xl opacity-0.9   rounded-full p-4 hover:drop-shadow-xl "
              >
                {ele.icon}
              </button>
              <p className="mt-3">
                <span className="font-semibold text-ll ">{ele.amount}</span>{" "}
                <span className={`text-sm  text-${ele.pcColor} ml-2`}>
                  {ele.percentage}
                </span>
              </p>
              <p className=" text-sm text-gray-400 mt-1">{ele.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className=" flex justify-between ">
            <p className="text-xl font-semibold">Revenue updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expanse</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p> 
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10 ">
              <div>
                <p>
                  <span className="text-3x1 font-semibold  ">$77,0008</span>
                  <span className="p-1.5 hover:drop-shadow-lg cursor-pointer text-white rounded-full bg-green-400 text-xs ml-3">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3x1 font-semibold  ">$84,048</span>
                </p>
                <p className="text-gray-500 mt-1">Expanse</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  color={currentColor}
                  data={SparklineAreaData}
                />
              </div>

              <div className="mt-10">
                <Button
                  color={"white"}
                  bgColor={currentColor}
                  text={"Download Report"}
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" colorbg={currentMode === 'dark' ? 'black': 'white'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
