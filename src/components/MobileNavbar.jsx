import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const menuList = [
    {
      id: 1,
      text: "Home",
      route: "/",
    },
    {
      id: 2,
      text: "About Us",
      route: "/",
    },
    {
      id: 3,
      text: "Our Services",
      route: "/",
    },
    {
      id: 4,
      text: "Responsibilities",
      route: "/",
    },
    {
      id: 5,
      text: "Country",
      route: "/",
    },
  ];

  return (
    <div className="sm:hidden dropdown ">
      <ul className=" bg-white -mt-4 absolute min-w-full dropdown-menu ">
        {menuList.map((x) => (
          <li className=" ml-4">
            <NavLink
              to={x.route}
              className="block px-2 py-3 hover:text-primary hover:font-semibold"
            >
              {x.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavbar;
