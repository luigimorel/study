import React from "react";

//Assets
import BlogOne from "./../assets/BlogOne.png";
import BlogTwo from "./../assets/BlogTwo.png";
import BlogThree from "./../assets/BlogThree.png";
import { ReactComponent as CalendarIcon } from "./../assets/Calendar.svg";
import { ReactComponent as Arrow } from "./../assets/Arrow.svg";

const News = () => {
  const news = [
    {
      id: 1,
      img: BlogOne,
      date: "17 Apr 2022",
      title: "Trump Lays Plans to Reverse Obama’s Climate Change Legacy",
    },
    {
      id: 2,
      img: BlogTwo,
      date: "17 Apr 2022",
      title: "Trump Lays Plans to Reverse Obama’s Climate Change Legacy",
    },
    {
      id: 3,
      img: BlogThree,
      date: "17 Apr 2022",
      title: "Trump Lays Plans to Reverse Obama’s Climate Change Legacy",
    },
  ];
  return (
    <div className="pt-24 bg-forth sm:px-20 px-4">
      <div>
        <h3 className="mb-6 text-center text-3xl text-minor">News</h3>
        <p className="text-center text-secondary text-xl sm:mb-20 mb-10">
          Executive Trade International is an University Application Centre,
          <br className="hidden sm:inline" />
          guiding Bangladeshi students to Australian, British, Canadian and
          <br className="hidden sm:inline" />
          Irish universities!
        </p>
      </div>

      <div className="sm:flex-row flex flex-col justify-between pb-16 ">
        {news.map((x) => (
          <div key={x.id} className="flex flex-col bg-white sm:mx-8 mb-6 ">
            <img
              src={x.img}
              //   width="300"
              //   height="400"
              className="mb-7 "
              alt=""
            />

            <div className="px-6 mb-14">
              <div className="flex flex-row  items-center mb-4">
                <span className="mr-3">
                  <CalendarIcon />
                </span>
                <span>{x.date}</span>
              </div>
              <p className="text-2xl text-secondary">{x.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-14">
        <button className="flex flex-row bg-primary py-3 px-8 rounded-md mb-7 items-center text-center">
          <span className="mr-7 text-white text-2xl">Join Here</span>
          <span>
            <Arrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default News;
