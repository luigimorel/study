import React from "react";

//Assets
import { ReactComponent as Arrow } from "./../assets/Arrow.svg";
import { ReactComponent as Oval1 } from "./../assets/Oval1.svg";
import { ReactComponent as Oval2 } from "./../assets/Oval2.svg";

const Events = () => {
  const events = [
    {
      id: 1,
      date: "23 Dec",
      location: "Macquarie University, Sydney",
      country: "Australia",
      eventDesc:
        "  Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      link: "/",
      linkText: "Learn More",
      icon: <Arrow />,
      time: "10:00 AM - 3:00 PM",
    },
    {
      id: 2,
      date: "23 Dec",
      location: "Macquarie University, Sydney",
      country: "Australia",
      eventDesc:
        "  Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      link: "/",
      linkText: "Learn More",
      icon: <Arrow />,
      time: "10:00 AM - 3:00 PM",
    },
  ];
  return (
    <div className="sm:mx-44 mx-4 bg-main-bg">
      <div className="mb-8 sm:mb-0">
        <h3 className="sm:mb-6 text-center text-3xl mb-8 text-minor">
          Upcoming University Events
        </h3>
        <p className="text-center text-secondary text-xl sm:mb-20">
          Executive Trade International is an University Application Centre,
          <br className="hidden sm:inline" />
          guiding Bangladeshi students to Australian, British, Canadian and
          <br className="hidden sm:inline" />
          Irish universities!
        </p>
      </div>
      <div className="flex sm:flex-row flex-col justify-between">
        {/* Second div  */}
        {events.map((x) => (
          <div
            key={x.id}
            className={"p-8 bg-white rounded-md event-container mr-8"}
          >
            <div className="flex flex-row items-center mb-7">
              <div className="bg-primary rounded-md h-20 w-20 items-center flex justify-around">
                <p className="p-5 text-white text-xl sm:text-2xl ">{x.date}</p>
              </div>

              <div className="ml-5 text-minor text-2xl">
                <p>
                  {x.location} <br className="hidden sm:visible" /> {x.country}
                </p>
              </div>
            </div>

            <div className="mb-8">{x.eventDesc}</div>

            <div className="flex flex-row justify-between">
              <a href={x.link} className="flex flex-row mb-4">
                <span className="text-primary font-medium">{x.linkText}</span>
                <span className="ml-3">
                  <Arrow />
                </span>
              </a>
              <div className="font-medium text-minor">{x.time}</div>
            </div>
          </div>
        ))}
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

export default Events;
