import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import Button from "./Button";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Chat = () => {
    const {currentColor,handleClose}= useStateContext()
  return (
    <div className=" absolute w-96 bg-white dark:bg-[#42464d] right-5 md:right-52 top-16 rounded-lg p-8 z-20">
      <div className="flex justify-between items-center ">
        <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
        <Button icon={<MdOutlineCancel />} size="2x1" borderRadius={"50%"} fun={()=>handleClose('Chat')} color={"rgb(154,171,180)"}/>
      </div>
      <div className="mt-5">
        {chatData.map((ele, i) => (
          <div
            className="flex gap-5 p-3 leading-8 mb-2 border-b-1 border-color cursor-pointer items-center"
            key={i}
          >
            <div className="relative">
              <img
                className="h-10 w-10 rounded-full"
                src={ele.image}
                alt="po"
              />
            </div>
            <div className="">
              <p className="font-semibold dark:text-gray-200">{ele.message}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{ele.desc}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{ele.time}</p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <div>
                 <Button
            text={'See all messages'}
            costomC='w-full'
            color={'white'}
            borderRadius='10px'
            bgColor={currentColor}
           
            />
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Chat;
