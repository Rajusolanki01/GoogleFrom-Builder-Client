import React from "react";
import {
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo6,
  icon1,
  icon2,
  icon3,
} from "./ServiceAssets";

function Services() {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: icon1,
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: icon2,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: icon3,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-white">
      <div className="text-center my-8">
        <h2 className="text-4xl text-black font-semibold mb-2 ">Our Clients</h2>
        <p className="text-neutralDGrey">
          We have been working with some fortune 500+ clients.
        </p>

        <div className="my-12 flex flex-wrap justify-between items-center gap-16">
          <img src={brandLogo1} alt="brandLogo1" />
          <img src={brandLogo2} alt="brandLogo2" />
          <img src={brandLogo3} alt="brandLogo3" />
          <img src={brandLogo4} alt="brandLogo4" />
          <img src={brandLogo5} alt="brandLogo5" />
          <img src={brandLogo6} alt="brandLogo6" />
          <img src={brandLogo2} alt="brandLogo2" />
        </div>
      </div>

      <div className="text-center mt-20 md:w-1/2 mx-auto ">
        <h2 className="text-3xl text-black font-semibold mb-3 ">
          Manage your community in a single system.
        </h2>
        <p className="text-neutralDGrey">
          Who is Super Assistant suitable for?.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
             hover:border-green-500 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="">
                <img className=" bg-[#E8F5E9] h-14 mb-4 w-14 mx-auto rounded-tl-3xl rounded-br-3xl" src={service.image} alt={service.title} />
                <h4 className="text-2xl font-bold text-black mb-2 px-2">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralDGrey">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
