import React from "react";
import { ReactComponent as Service1 } from "./../assets/Service1.svg";
import { ReactComponent as Service2 } from "./../assets/Service2.svg";
import { ReactComponent as Service3 } from "./../assets/Service3.svg";
import { ReactComponent as Service4 } from "./../assets/Service4.svg";
import { ReactComponent as Service5 } from "./../assets/Service5.svg";
import { ReactComponent as Arrow } from "./../assets/Arrow.svg";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Service1 />,
      heading: "Career Counselling",
      text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      link: "#",
    },

    {
      id: 2,
      icon: <Service2 />,
      heading: "University Admissions",
      text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      link: "#",
    },

    {
      id: 3,
      icon: <Service3 />,
      heading: "Visa Consultancy",
      text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      link: "#",
    },
  ];

  const services2 = [
    {
      id: 4,
      icon: <Service4 />,
      heading: "Accommodation",
      text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      link: "#",
    },

    {
      id: 5,
      icon: <Service5 />,
      heading: "Pre-Departure Briefing",
      text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      link: "#",
    },

    {
      id: 6,
      icon: <Service1 />,
      heading: "Fun Moments",
      text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      link: "#",
    },
  ];
  return (
    <div className="sm:mx-20 mx-4">
      <div className="justify-center mb-24">
        <h2 className="text-center mb-6 text-3xl text-minor">Our Services</h2>
        <p className="text-center text-secondary text-xl">
          Executive Trade International is an University Application Centre,
          <br className="hidden sm:inline" />
          guiding Bangladeshi students to Australian, British, Canadian and
          <br className="hidden sm:inline" />
          Irish universities!
        </p>
      </div>

      {/* Services */}
      <div className="flex sm:flex-row flex-col">
        {services.map((x) => (
          <div
            key={x.id}
            className="flex mb-14 flex-col bg-white service-container sm:mr-12 rounded-md  "
          >
            <div className="px-8 ">
              <div className="py-8    ">{x.icon} </div>
              <h3 className="mb-2.5 text-minor text-2xl">{x.heading}</h3>
              <p className="text-minor mb-3">{x.text}</p>
              <a href={x.link} className="flex flex-row mb-8">
                <span className="text-primary">Learn More</span>
                <span className="sm:ml-3 ml-2">
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex sm:flex-row flex-col">
        {services2.map((x) => (
          <div
            key={x.id}
            className="flex mb-14 flex-col bg-white sm:mr-12 service-container rounded-md  "
          >
            <div className="px-8 ">
              <div className="py-8    ">{x.icon} </div>
              <h3 className="mb-2.5 text-minor text-2xl">{x.heading}</h3>
              <p className="text-minor mb-3">{x.text}</p>
              <a href={x.link} className="flex flex-row mb-8">
                <span className="text-primary">Learn More</span>
                <span className="ml-3">
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
