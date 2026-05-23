import React from "react";
import logo from "../../assets/logo.png";
import { Outlet, useNavigate } from "react-router-dom";
function Layout() {
  const navigate = useNavigate();
  const onClickMenu = (routeName) => {
    navigate(routeName);
  };
  // const onClicktoBackend = () => {
  //     window.location.href = "/dashboard"
  // }
  return (
    <>
      <nav className="flex justify-between bg-gray-300">
        <div>
          <img
            className="w-[100px] pt-[15px] ml-[30px]"
            src={logo}
            alt="Logo"
            onClick={() => onClickMenu("/")}
          />
        </div>
        <div className="menu-content">
          <ul className="flex ">
            <li
              onClick={() => onClickMenu("")}
              className="p-[20px] cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => onClickMenu("about")}
              className="p-[20px] cursor-pointer"
            >
              About 11
            </li>
            <li
              onClick={() => onClickMenu("product")}
              className="p-[20px] cursor-pointer"
            >
              Product
            </li>
            <li
              onClick={() => onClickMenu("category")}
              className="p-[20px] cursor-pointer"
            >
              Category
            </li>
            <li
              onClick={() => onClickMenu("login")}
              className="p-[20px] cursor-pointer"
            >
              Login
            </li>
            <li
              onClick={() => onClickMenu("dashboard")}
              className="p-[20px] cursor-pointer"
            >
              Go Backend
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
      <footer className="bg-gray-700 w-full h-[200px] mt-10">Footer</footer>
    </>
  );
}

export default Layout;
