import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import Button from "./Button";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Notification = () => {
  const { currentColor, handleClose } = useStateContext();
  return (
    <div className=" absolute w-96 bg-white dark:bg-[#42464d] right-5 md:right-40 top-16 rounded-lg p-8 z-20">
      <div className="flex justify-between items-center ">
        <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
        <Button
          icon={<MdOutlineCancel />}
          size="2x1"
          borderRadius={"50%"}
          fun={() => handleClose("Notification")}
          color={"rgb(154,171,180)"}
        />
      </div>
      
        <div className="mt-5">
          <div>
                 <Button
            text={'See all notification'}
            costomC='w-full'
            color={'white'}
            borderRadius='10px'
            bgColor={currentColor}
           
            />
          </div>
       
        </div>
    </div>
  );
};

export default Notification;
