import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex justify-around items-center w-full h-[50px] mt-2 font-bold text-base ">
      <div className=" w-[100px] h-[40px] hover:bg-[#F4F4F4]  hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out flex justify-center items-center rounded-xl">
        <Link to={"/"}>Home</Link>
      </div>
      <div className=" w-[100px] h-[40px] hover:bg-[#F4F4F4] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out flex justify-center items-center rounded-xl">
        <Link to={"/cart"}>Cart</Link>
      </div>
      <div className=" w-[100px] h-[40px] hover:bg-[#F4F4F4] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out flex justify-center items-center rounded-xl">
        <Link to={"/checkout"}>Checkout</Link>
      </div>
    </div>
  );
};

export default Header;
