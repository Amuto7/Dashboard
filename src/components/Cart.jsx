import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import { Button } from ".";

const Cart = () => {
  const { currentColor,handleClose } = useStateContext();
  return (
    <div className="bg-half-transparent w-screen h-screen fixed cart top-0 right-0 z-50">
      <div className="w-400 float-right h-screen dark:bg-[#42464d]  bg-white">
        <div className="flex justify-between items-center ml-4 p-4">
          <p className="font-semibold text-lg dark:text-white">Shopping Cart</p>
          <Button fun={()=>handleClose('Cart')} icon={<MdOutlineCancel />} borderRadius={"50%"} size={"xl"} color={"rgb(154,171,180)" }/>
        </div>
        {cartData.map((ele, i) => (
          <div key={i}>
            <div className="flex ml-5 p-4 leading-8 items-center gap-5 border-b-1 border-color">
              <img src={ele.image} alt="ele" className="w-24 h-80 rounded-lg" />
              <div>
                <p className="font-semibold dark:text-white">{ele.name}</p>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {ele.category}
                </p>
                <div className="flex mt-2 items-center gap-4">
                  <p className="font-semibold text-lg dark:text-white">{ele.price}</p>
                  <div className="flex items-center border border-r-0 border-color rounded ">
                    <p className="text-red-600 p-2 border-color border-r-1 dark:border-gray-600 ">
                      {<AiOutlineMinus />}
                    </p>
                    <p className="text-green-600 p-2 border-r-1 border-color dark:border-gray-600">
                      0
                    </p>
                    <p className="text-green-600 p-2 border-r-1 border-color dark:border-gray-600">
                      {<AiOutlinePlus />}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="ml-4 mb-3 mt-4">
            <div className="flex justify-between px-4  ">
                <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
                <p className="font-semibold text-gray-500 dark:text-gray-200">$890</p>
            </div>
            <div className="flex justify-between px-4 mt-4">
                <p className="text-gray-500 dark:text-gray-200 ">Total</p>
                <p className="font-semibold text-gray-500 dark:text-gray-200">$780</p>
            </div>
        </div>
        <div className="mt-4 px-4">
            <Button 
            borderRadius={'10px'}
            costomC='w-full'
            text='Place Order'
            bgColor={currentColor}
            color='white'
            />
        </div>
      </div>
    </div>
  );
};

export default Cart;
