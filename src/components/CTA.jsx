import React from "react";

//Assets
import { ReactComponent as Arrow } from "./../assets/Arrow.svg";

const CTA = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-36 items-center py-20 bg-forth">
      <h4 className="font-bold text-4xl text-secondary mb-12 sm:mb-0">
        Ready to chase your dreams?
      </h4>
      <button className="flex flex-row bg-primary py-3 px-8 rounded-md  items-center text-center">
        <span className="mr-7 text-white text-2xl">Apply Online</span>
        <span>
          <Arrow />
        </span>
      </button>
    </div>
  );
};

export default CTA;
