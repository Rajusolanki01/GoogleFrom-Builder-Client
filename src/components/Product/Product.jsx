import React from "react";
import aboutImg2 from "../../assets/pana.svg";
import LogoImg from "../../assets/Logo.png";
import {
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo6,
} from "../Services/ServiceAssets";

function Product() {
  return (
    <div>
      <div className="bg-green-100 px-4 lg:px-14 max-w-screen-2xl mx-auto">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img className="w-96 h-96" src={aboutImg2} alt="aboutImg" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-black font-semibold text-4xl mb-4 md:w-4/5">
              How to design your Form site footer like we did
            </h2>
            <p className="text-neutralDGrey md:w-3/4 text-sm mb-6">
              Set up tiered rewards giving multiple fixed and percentage off
              coupons or giftcards based on how much a customer spends on your
              store! Also- make these rewards expiring so that your customers
              redeem them quickly.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Company stats */}

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img className="w-64" src={LogoImg} alt="Logo" />
          </div>

          {/* Stats */}

          <div className="md:w-2/3 mx-auto ">
            <dir>
              <p className="md:w-4/5 text-sm text-neutralDGrey mb-8 leading-7">
                Add banner image, customize the text on the popup widget that is
                going to be shown on your website. And also don't forget to have
                your own branded emails set up in the app! Integrate with apps
                like Klaviyo and Judge.Me to automate your email campaign based
                on how many points a customer has earned in our app or reward
                customers for leaving a review on your store!
              </p>
              <h5 className="text-green-500 text-xl font-semibold mb-2">
                Super Assistant
              </h5>
              <p className="text-base text-neutralDGrey mb-3">
                Form Builder Developers
              </p>
              <div>
                <div className="flex items-center gap-8">
                  <img
                    src={brandLogo1}
                    alt="Brands"
                    className="cursor-pointer"
                  />
                  <img
                    src={brandLogo2}
                    alt="Brands"
                    className="cursor-pointer"
                  />
                  <img
                    src={brandLogo3}
                    alt="Brands"
                    className="cursor-pointer"
                  />
                  <img
                    src={brandLogo4}
                    alt="Brands"
                    className="cursor-pointer"
                  />
                  <img
                    src={brandLogo5}
                    alt="Brands"
                    className="cursor-pointer"
                  />
                  <img
                    src={brandLogo6}
                    alt="Brands"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </dir>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
