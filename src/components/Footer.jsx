import React from "react";

//Assets
import LogoLight from "./../assets/LogoLight.png";
import { ReactComponent as FBLight } from "./../assets/lite.svg";
import { ReactComponent as TwitterLight } from "./../assets/tw-light.svg";
import { ReactComponent as InstagramLight } from "./../assets/light.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const menu1 = [
    {
      id: 1,
      text: "About Us",
      link: "/",
    },
    {
      id: 2,
      text: "Responsibilities",
      link: "/",
    },
    {
      id: 3,
      text: "Contact Us",
      link: "/",
    },
    {
      id: 4,
      text: "Our Services",
      link: "/",
    },
  ];

  const menu2 = [
    {
      id: 1,
      text: "Disclaimer",
      link: "/",
    },
    {
      id: 2,
      text: "Testimonials",
      link: "/",
    },
    {
      id: 3,
      text: "Privacy Policy",
      link: "/",
    },
    {
      id: 4,
      text: "Terms of Service",
      link: "/",
    },
  ];

  const socialIcons = [
    {
      id: 1,
      icon: <FBLight />,
      link: "/",
    },
    {
      id: 2,
      icon: <TwitterLight />,
      link: "/",
    },
    {
      id: 3,
      icon: <InstagramLight />,
      link: "/",
    },
  ];

  return (
    <div className="bg-primary text-white sm:px-36 px-4 py-16">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col">
          <Link to="/">
            <img src={LogoLight} className="mb-6" height="100" alt="" />
          </Link>
          <div>
            <p className="font-medium">
              Concord Royal Court (3rd floor) Dhanmondi, <br /> Dhaka 1209,
              Bangladesh.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {menu1.map((x) => (
            <a key={x.id} href={x.link} className="mb-6 font-medium">
              {x.text}
            </a>
          ))}
        </div>

        {/* Discliamers */}
        <div className="flex flex-col">
          {menu2.map((x) => (
            <a key={x.id} href={x.link} className="mb-6 font-medium">
              {x.text}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex flex-row items-center">
          {socialIcons.map((x) => (
            <a
              key={x.id}
              href={x.link}
              className={x.id === 3 ? "mb-6" : "mb-6  mr-9"}
            >
              {x.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="text-center mt-10 font-bold">
        © 2021 Executive Trade International.
      </p>
    </div>
  );
};

export default Footer;
