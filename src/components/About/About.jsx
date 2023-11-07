import React from "react";
import aboutImg from "../../assets/Frame 35.svg";
import {
  collection1,
  collection2,
  collection3,
  collection4,
} from "./AboutAssets";

function About() {
  return (
    <div>
      <div className="bg-green-100 px-4 lg:px-14 max-w-screen-2xl mx-auto">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img className="w-96 h-96" src={aboutImg} alt="aboutImg" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-black font-semibold text-4xl mb-4 md:w-4/5">
              The unseen of spending years at Super Assistant Form Builder
            </h2>
            <p className="text-neutralDGrey md:w-3/4 text-sm mb-6">
              We believe that every store should have access to these basic
              features which help you manage your store with ease. And all of
              these features are completeley FREE!!!
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Company stats */}

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-black font-semibold text-4xl mb-10 md:w-4/5">
              Helping a local{" "}
              <span className="text-green-500">business reinvent itself</span>
            </h2>
            <p>
              Keep your most valuable customers engaged with increasing status
              and rewards!!!!
            </p>
          </div>

          {/* Stats */}

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8 ">
              <div className="flex items-center gap-4">
                <img className="w-12 h-auto" src={collection1} alt="Members" />
                <div>
                  <h1 className="text-2xl text-neutralDGrey font-semibold ">
                    2,245,341
                  </h1>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img className="w-12 h-auto" src={collection2} alt="Rewards" />
                <div>
                  <h1 className="text-2xl text-neutralDGrey font-semibold ">
                    828,867
                  </h1>
                  <p>Rewards</p>
                </div>
              </div>
            </div>
            <div className="space-y-8 ">
              <div className="flex items-center gap-4">
                <img className="w-12 h-auto" src={collection3} alt="Clubs" />
                <div>
                  <h1 className="text-2xl text-neutralDGrey font-semibold ">
                    46,228
                  </h1>
                  <p>Clubs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img className="w-12 h-auto" src={collection4} alt="Payments" />
                <div>
                  <h1 className="text-2xl text-neutralDGrey font-semibold ">
                    1,926,536
                  </h1>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
