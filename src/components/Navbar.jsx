import React, { useState } from "react";
import { Link } from "react-router-dom";

//Assets
import Logo from "./../assets/Logo.png";
import { ReactComponent as BurgerMenu } from "./../assets/BurgerMenu.svg";

const Navbar = () => {
  // State for the navbar
  const [open, setOpen] = useState(false);

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
    <div className="flex flex-row justify-between items-center pt-10 mb-10 ">
      <Link to="/">
        <img src={Logo} loading="lazy" alt="" />
      </Link>

      <p className="sm:hidden">
        <BurgerMenu onClick={() => setOpen(!open)} />
      </p>

      <div className="sm:flex  md:flex-row hidden  items-center">
        <ul className="flex flex-row   ">
          {menuList.map((x) => (
            <Link key={x.id} to={x.route}>
              <li className="mr-8 sm:mr-4 hover:font-medium  hover:border-blue-500  text-lg hover:text-primary  pb-1">
                {x.text}
              </li>
            </Link>
          ))}
        </ul>
        <Link to="/">
          <button className="border-blue-300 border-2 hover:text-white transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded-md px-8 py-2.5 hover:bg-primary ">
            Apply
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
