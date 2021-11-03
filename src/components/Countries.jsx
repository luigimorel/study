import React from "react";

//Assets
import Canada from "./../assets/Canada.png";
import UK from "./../assets/UK.png";
import Australia from "./../assets/Australia.png";
import { ReactComponent as Oval1 } from "./../assets/Oval1.svg";
import { ReactComponent as Oval2 } from "./../assets/Oval2.svg";

const Countries = () => {
  return (
    <div className="bg-feature  sm:pt-20 pt-16 sm:px-36 px-4 ">
      <div className="mb-16">
        <h3 className="mb-6 text-center text-3xl text-minor">
          Countries We Covered
        </h3>
        <p className="text-center text-secondary text-xl sm:mb-20">
          Executive Trade International is an University Application Centre,
          <br className="hidden sm:inline" />
          guiding Bangladeshi students to Australian, British, Canadian and
          <br className="hidden sm:inline" />
          Irish universities!
        </p>
      </div>
      <div className="flex sm:flex-row flex-col">
        <div className="sm:mr-12 mb-5 sm:mb-0">
          <img src={Australia} className="mb-2.5" alt="" />
          <h4 className="font-bold text-primary text-2xl mb-2.5">
            Study in Australia
          </h4>
          <p className="text-secondary">
            Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum
            sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum
            voluptate porro harum. Facilis voluptatum eum est.
          </p>
        </div>
        <div className="mr-12 mb-5 sm:mb-0">
          <img src={Canada} className="mb-2.5" alt="" />
          <h4 className="font-bold text-primary text-2xl mb-2.5">
            Study in Canada
          </h4>
          <p className="text-secondary">
            Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum
            sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum
            voluptate porro harum. Facilis voluptatum eum est.
          </p>
        </div>
        <div>
          <img src={UK} className="mb-2.5" alt="" />
          <h4 className="font-bold text-primary text-2xl mb-2.5">
            Study in UK
          </h4>
          <p className="text-secondary">
            Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum
            sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum
            voluptate porro harum. Facilis voluptatum eum est.
          </p>
        </div>
      </div>
      <div className="w-auto flex flex-row justify-center py-14">
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

export default Countries;
