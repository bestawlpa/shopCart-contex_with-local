import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex justify-around items-center w-full h-[50px] mt-2 font-bold text-base ">
      <Link to={"/"}>
        <div className=" w-[100px] h-[40px] hover:bg-[#F4F4F4]  hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out flex justify-center items-center rounded-xl">
          Home
        </div>
      </Link>
      <Link to={"/cart"}>
        <div className=" w-[100px] h-[40px] hover:bg-[#F4F4F4] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out flex justify-center items-center rounded-xl">
          Cart
        </div>
      </Link>
      <Link to={"/checkout"}>
        <div className=" w-[100px] h-[40px] hover:bg-[#F4F4F4] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out flex justify-center items-center rounded-xl">
          Checkout
        </div>
      </Link>
    </div>
  );
};

export default Header;
