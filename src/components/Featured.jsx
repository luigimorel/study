import React from "react";

//Assets
import Logo1 from "./../assets/Logo1.png";
import Logo2 from "./../assets/Logo2.png";
import Logo3 from "./../assets/Logo3.png";
import Logo4 from "./../assets/Logo4.png";
import { ReactComponent as Oval1 } from "./../assets/Oval1.svg";
import { ReactComponent as Oval2 } from "./../assets/Oval2.svg";

const FeaturedUniversities = () => {
  const logos = [
    {
      id: 1,
      logo: Logo1,
      alt: "logo",
    },
    {
      id: 2,
      logo: Logo2,
      alt: "logo",
    },
    {
      id: 3,
      logo: Logo3,
      alt: "logo",
    },
    {
      id: 4,
      logo: Logo4,
      alt: "logo",
    },
  ];
  return (
    <div className="flex flex-col bg-feature sm:px-32 px-8 mb-28  ">
      <h3 className="text-center text-minor uppercase mt-14 mb-20 text-2xl">
        Featured Universities
      </h3>

      <div className=" sm:flex-row flex   flex-col   justify-between mb-24">
        {logos.map((x) => (
          <img
            src={x.logo}
            key={x.id}
            className="mb-8 overflow-auto mr-4"
            alt={x.alt}
          />
        ))}
      </div>

      <div className="w-auto sm:visible flex-row hidden justify-center mb-14">
        <span className="mr-5">
          <Oval1 />
        </span>
        <span className="mr-5">
          <Oval2 />
        </span>
        <span className="mr-5">
          <Oval2 />
        </span>
        <span className="mr-5">
          <Oval2 />
        </span>
      </div>
    </div>
  );
};

export default FeaturedUniversities;
