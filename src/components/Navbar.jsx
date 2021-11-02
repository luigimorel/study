import React from "react";
import { Link } from "react-router-dom";

//Assets
import Logo from "./../assets/Logo.png";
import { ReactComponent as BurgerMenu } from "./../assets/BurgerMenu.svg";

const Navbar = () => {
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
    <div className="flex flex-row justify-between items-center mt-10 mb-10 ">
      <Link to="/">
        <img src={Logo} loading="lazy" alt="" />
      </Link>

      <p className="sm:hidden">
        <BurgerMenu />
      </p>
      <div className="sm:flex  md:flex-row hidden  items-center">
        <ul className="flex flex-row ">
          {menuList.map((x) => (
            <Link key={x.id} to={x.route}>
              <li className="mr-8 sm:mr-4 ">{x.text}</li>
            </Link>
          ))}
        </ul>
        <Link to="/">
          <button className="border-blue-300 border-2 rounded-md px-8 py-2.5">
            Apply
          </button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Navbar;
