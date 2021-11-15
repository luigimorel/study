import React from "react";

//Assets
import HeroImage from "./../assets/Hero.png";
import { ReactComponent as Arrow } from "./../assets/Arrow.svg";
import { ReactComponent as Twitter } from "./../assets/Twitter.svg";
import { ReactComponent as FB } from "./../assets/facebook.svg";
import { ReactComponent as Instagram } from "./../assets/Instagram.svg";

const HeroSection = () => {
  const socials = [
    {
      id: 1,
      icon: <FB />,
      link: "#",
    },
    {
      id: 2,
      icon: <Twitter />,
      link: "#",
    },
    {
      id: 3,
      icon: <Instagram />,
      link: "#",
    },
  ];
  return (
    <div className="flex sm:mx-14 mx-6 sm:flex-row flex-col  justify-between  sm:mt-18  sm:mt-36">
      <div>
        <h3 className="text-tertiary text-5xl mb-12">
          We Help to <span className="text-primary">Build</span>
          <br className="hidden sm:inline" /> Your Dream
        </h3>

        <p className="mb-14 text-secondary text-2xl">
          We are always availed to consult on taking your higher education to
          the next level so you can stay competitive in the global world. We
          welcome the opportunity to work with you "today" for "tomorrow's"
          better career solutions.
        </p>
        <button className="flex flex-row bg-primary py-3 px-8 rounded-md mb-7 items-center text-center">
          <span className="mr-7 text-white text-2xl">Apply Online</span>
          <span>
            <Arrow />
          </span>
        </button>

        <div className="flex flex-row sm:mb-0 mb-4">
          {socials.map((x) => (
            <a
              key={x.id}
              href={x.link}
              className="mr-6"
              target="_blank"
              rel="noreferrer noopenner"
            >
              {x.icon}
            </a>
          ))}
        </div>
      </div>
      <img src={HeroImage} alt="" className="sm:-mt-32" />
    </div>
  );
};

export default HeroSection;
