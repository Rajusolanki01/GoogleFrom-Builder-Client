import React, { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";
import AppsIcon from "@mui/icons-material/Apps";
import IconButton from "@mui/material/IconButton";
import TemporaryDrawer from "./TemporaryDrawer";
import { Link } from "react-router-dom";
import { googleFormImg } from "./formAssets";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove the event listener when the component unmounts
    };
  }, []);

  return (
    <div className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-2 lg:px-10 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-white duration-200"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <div className="text-2xl font-semibold flex items-center space-x-3 m-1">
            <TemporaryDrawer />
            <img
              src={googleFormImg}
              alt="Logo"
              srcSet={googleFormImg}
              className="w-10 h-auto inline-block items-center"
            />
            <Link
              to={"/"}
              className="text-2xl font-semibold flex items-center space-x-3 m-1"
            >
              <span className="text-[#000000]">
                Form <span className=" hover:text-green-500 ">Builder</span>
              </span>
            </Link>
          </div>

          <div className="header-search ">
            <form className="items-center hidden lg:flex">
              <div className="relative w-full hidden md:flex ">
                <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="text-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-[35rem] pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="Search ..."
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                ></button>
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-green-500 rounded-lg border border-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                Search
              </button>
            </form>
          </div>

          <div className="header-right space-x-12 sm:flex items-center">
            <IconButton>
              <AppsIcon />
            </IconButton>
            <div className="hidden md:flex items-center text-brandPrimary">
              <Avatar />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;