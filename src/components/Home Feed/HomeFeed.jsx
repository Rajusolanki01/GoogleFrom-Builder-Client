import React from "react";
import { Carousel } from "flowbite-react";
import Banner1 from "../../assets/Illustration.svg";
import Banner2 from "../../assets/picture3.jpg";
import Banner3 from "../../assets/Picture1.jpg";
import { TypeAnimation } from "react-type-animation";
import Services from "../Services/Services";
import About from "../About/About";
import Product from "../Product/Product";
import MyFooter from "../Footer/MyFooter";
import { Link } from "react-router-dom";

function HomeFeed() {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <div className="bg-neutralSilver">
          <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
            <Carousel className="w-full mx-auto">
              <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div className="">
                  <img src={Banner1} alt="Banner" />{" "}
                </div>
                {/* Hero Text */}
                <div className="md:w-1/2">
                  <h1 className="text-3xl font-semibold mb-4 text-green-500 md:w-[100%] leading-snug">
                    <TypeAnimation
                      sequence={[
                        "FORMS Your Way, Your Success",
                        1000,
                        "FORMS that break the norm",
                        1000,
                      ]}
                      wrapper="span"
                      speed={1}
                      repeat={Infinity}
                    />
                  </h1>
                  <p className="text-2xl  mb-8">
                    Get more data—like signups, feedback, Question and anything
                    else—with forms designed to be{" "}
                    <span className="text-black font-bold">
                      refreshingly different.
                    </span>
                  </p>
                  <button className="btn-primary">
                    <Link to={"/formbuilder"}>Create Form</Link>
                  </button>
                </div>
              </div>
              <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div className="">
                  <img src={Banner2} alt="Banner" className="w-96 h-auto" />{" "}
                </div>
                {/* Hero Text */}
                <div className="md:w-1/2">
                  <h1 className="text-3xl font-semibold mb-4 text-green-500 md:w-[100%] leading-snug">
                    <TypeAnimation
                      sequence={[
                        "FORMS Your Way, Your Success",
                        1000,
                        "FORMS When Data Meet Innovation.",
                        1000,
                      ]}
                      wrapper="span"
                      speed={1}
                      repeat={Infinity}
                    />
                  </h1>
                  <p className="text-2xl  mb-8">
                    Get more data—like signups, feedback, Question and anything
                    else—with forms designed to be{" "}
                    <span className="text-black font-bold">
                      refreshingly different.
                    </span>
                  </p>
                  <button className="btn-primary">
                    <Link to={"/formbuilder"}>Create Form</Link>
                  </button>
                </div>
              </div>
              <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div className="">
                  <img src={Banner3} alt="Banner" className="w-[280px] h-auto" />{" "}
                </div>
                {/* Hero Text */}
                <div className="md:w-1/2">
                  <h1 className="text-3xl font-semibold mb-4 text-green-500 md:w-[100%] leading-snug">
                    <TypeAnimation
                      sequence={[
                        "FORMS Your Way, Your Success",
                        1000,
                        "FORMS Let's Create Easily ",
                        1000
                      ]}
                      wrapper="span"
                      speed={1}
                      repeat={Infinity}
                    />
                  </h1>
                  <p className="text-2xl  mb-8">
                    Get more data—like signups, feedback, Question and anything
                    else—with forms designed to be{" "}
                    <span className="text-black font-bold">
                      refreshingly different.
                    </span>
                  </p>
                  <button className="btn-primary">
                    <Link to={"/formbuilder"}>Create Form</Link>
                  </button>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <Services />
      <About />
      <Product />
      <MyFooter />
    </div>
  );
}

export default HomeFeed;