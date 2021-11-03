import React from "react";

//Assets
import Ainara from "./../assets/Ainara.png";
import Niek from "./../assets/Niek.png";
import Phillips from "./../assets/Phillips.png";
import { ReactComponent as Oval1 } from "./../assets/Oval1.svg";
import { ReactComponent as Oval2 } from "./../assets/Oval2.svg";

const Testimonials = () => {
  return (
    <div className="bg-feature pt-20 sm:px-36 px-4">
      <div className="mb-16">
        <h3 className="mb-6 text-center text-3xl text-minor">Testimonials </h3>
        <p className="text-center text-secondary text-xl sm:mb-20">
          Executive Trade International is an University Application Centre,
          <br className="hidden sm:inline" />
          guiding Bangladeshi students to Australian, British, Canadian and
          <br className="hidden sm:inline" />
          Irish universities!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:mr-12 mb-8">
          <div className=" flex flex-row">
            <img src={Phillips} className="mb-2.5" alt="" />
            <div className="flex flex-col ml-7">
              <h6 className="font-medium text-2xl mb-1">Harrison Phillips</h6>
              <span className="text-secondary">Reporter</span>
            </div>
          </div>
          <p className="text-secondary">
            Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum
            sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum
            voluptate porro harum. Facilis voluptatum eum est.
          </p>
        </div>
        <div className="sm:mr-12 mb-8">
          <div className=" flex flex-row">
            <img src={Ainara} className="mb-2.5" alt="" />
            <div className="flex flex-col ml-7">
              <h6 className="font-medium text-2xl mb-1">Ainara Vergara</h6>
              <span className="text-secondary">Ainara Vergara</span>
            </div>
          </div>
          <p className="text-secondary">
            Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum
            sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum
            voluptate porro harum. Facilis voluptatum eum est.
          </p>
        </div>
        <div>
          <div className=" flex flex-row">
            <img src={Niek} className="mb-2.5" alt="" />
            <div className="flex flex-col ml-7">
              <h6 className="font-medium text-2xl mb-1">Niek Bove</h6>
              <span className="text-secondary">Senior Developer</span>
            </div>
          </div>
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

export default Testimonials;
