import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { revamp } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // Track active menu for mobile
  const pathname = useLocation();

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) { // Only trigger on larger screens (e.g., tablets or desktops)
      setDropdownVisible(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) { // Only trigger on larger screens
      setDropdownVisible(false);
    }
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (id) => {
    if (activeMenu === id) {
      setActiveMenu(null); // Close the menu if it's already open
    } else {
      setActiveMenu(id); // Open the clicked menu
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <a className="block xl:mr-4 my-4" href="/">
            {/* <img src={revamp} width={90} height={10} alt="RevAmp" /> */}
          </a>
          <h1 className="text-[30px] revamp aldrich">
            RevAmp <span className="text-[30px] hub aldrich">Hub</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bg-n-8 lg:static lg:flex lg:flex-row lg:bg-transparent lg:visible flex-col items-center lg:items-center w-full lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-6">
            {navigation.map((item) => (
              <div
                key={item.id}
                className={`px-6 py-6 md:py-8 lg:leading-5 xl:px-12 mx-auto navlinks ${
                  item.subMenu ? "relative" : ""
                }`}
                onMouseEnter={item.subMenu ? handleMouseEnter : undefined}
                onMouseLeave={item.subMenu ? handleMouseLeave : undefined}
              >
                <a
                  href={item.url}
                  className={`block relative font-code text-[16px] links uppercase transition-colors ${
                    pathname.pathname === item.url ? "active" : "text-n-1/50"
                  } lg:font-semibold`}
                  onClick={item.subMenu ? () => handleClick(item.id) : undefined} // Click event for mobile
                >
                  {item.title}
                  {item.subMenu && <span className="ml-2">▼</span>}
                </a>

                {/* Desktop Submenu (Grid layout) */}
                {item.subMenu && dropdownVisible && (
                  <div className="absolute top-full left-0 transition-[0.5s] bg-white shadow-lg w-64 md:w-96 p-4 grid grid-cols-2 gap-4">
                    {item.subMenu.map((subItem) => (
                      <div key={subItem.id} className="flex items-start gap-2">
                        <span className="text-lg">{subItem.icon}</span>
                        <div>
                          <a
                            href={subItem.url}
                            className="block text-blue-500 transition-[0.5s] hover:underline font-semibold"
                          >
                            {subItem.title}
                          </a>
                          <p className="text-gray-500 text-sm">
                            {subItem.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Mobile Submenu (Dropdown List) */}
                {item.subMenu && activeMenu === item.id && openNavigation && (
                  <div className="block lg:hidden p-4  shadow-lg w-64 md:w-96">
                    <ul className="list-disc mx-auto pl-5">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.id} className="mb-2 text-center">
                          <a
                            href={subItem.url}
                            className="block text-blue-500 transition-[0.5s] hover:underline font-semibold"
                          >
                            {subItem.title}
                          </a>
                          <p className="text-gray-500 text-sm">
                            {subItem.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </nav>

        {/* Menu Toggle Button */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
