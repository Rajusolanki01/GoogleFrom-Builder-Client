import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { FaBarsStaggered, FaX } from "react-icons/fa6";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  // Nav Items Array
  const navItems = [
    { link: "Feed", path: "/" }, // Correct the path to "Feed"
    { link: "Service", path: "/services" },
    { link: "About", path: "/about" },
    { link: "Products", path: "/products" },
    { link: "Forms", path: "/formbuilder" },
    { link: "FAQ", path: "/" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-2 lg:px-10 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-white duration-200"
            : ""
        }`}>
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to={"/"}
            className="text-2xl font-semibold flex items-center space-x-3 m-1">
            <img
              src={Logo}
              alt="Logo"
              srcSet={Logo}
              className="w-10 inline-block items-center"
            />
            <span className="text-[#000000]">
              Super <span className=" hover:text-green-500 ">Assistant</span>
            </span>
          </Link>

          {/* nav items For Large Device */}

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path, id }) => (
              <Link
                key={id}
                to={path}
                offset={-100}
                className="block text-base text-gray900 hover:text-green-500 first:font-medium">
                {link}
              </Link>
            ))}
          </ul>

          {/* Button For Large Device */}

          <div className="space-x-12 hidden md:flex items-center">
            <div className="hidden md:flex items-center text-brandPrimary">
              <Avatar />
            </div>
          </div>
          {/* Menu Button For Large Device */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500">
              {isMenuOpen ? (
                <FaX className="h-6 w-6" />
              ) : (
                <FaBarsStaggered className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile device */}
        <div
          className={`space-y-4 px-4 mt-16 py-5 md:hidden bg-green-400 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}>
          {navItems.map(({ link, path, id }) => (
            <Link
              key={id}
              to={path}
              offset={-100}
              className="block text-base  text-white hover:text-black first:font-medium">
              {link}
            </Link>
          ))}
          <Avatar />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
