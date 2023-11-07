import React from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import { pictureimg, pictureimg0, pictureimgs } from "./formAssets";
import uuid from "react-uuid";
import Header from "./Header";
import MainBody from "./MainBody";
import {  useNavigate } from "react-router-dom";

const galleryButtonStyle = `
gallery-button
flex justify-between items-center
bg-transparent
`;

const Template = () => {
  const navigate = useNavigate();

  const createForm = () => {
    const id = uuid();
    navigate("/create-form/" + id);
  };
  return (
    <>
      <Header />
      <div className="template-section w-full max-w-screen-2xl  bg-neutralSilver pb-10 pt-20">
        <div className=" top mx-[160px] lg:flex lg:flex-row items-center justify-between">
          <div className="template-left">
            <span className="text-[16px] text-neutral-700 ml-5">
              Start a New Form
            </span>
          </div>
          <div className="template-right flex">
            <div className={galleryButtonStyle}>
              Template Gallery
              <UnfoldMoreIcon fontSize="small"  className="-z-30 overflow-hidden"/>
            </div>
            <IconButton>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        {/* Body */}
        {/* Card 1 */}
        <div className="template-body flex mx-40 flex-row items-center  text-center ">
          <div className="card mx-5 mt-4" onClick={createForm}>
            <img
              src={pictureimg0}
              alt="img"
              className="w-44 h-40 cursor-pointer rounded-sm border-[0.2px] border-[#FFFD] hover:border hover:border-1 hover:border-solid hover:border-green-500 "
            />
            <p className="">Blank Form</p>
          </div>

          {/* Card 2 */}

          <div className="card ml-5 mt-4">
            <img
              src={pictureimg}
              alt="img"
              className="w-40 h-auto cursor-pointer rounded-sm border-[0.2px] border-[#FFFD] hover:border hover:border-1 hover:border-solid hover:border-green-500"
            />
            {/* Card 3 */}
            <p>Business Form</p>
          </div>
          <div className="mx-5 mt-4">
            <img
              src={pictureimgs}
              alt="img"
              className="w-40 h-auto cursor-pointer rounded-sm border-[0.2px] border-[#FFFD] hover:border hover:border-1 hover:border-solid hover:border-green-500 "
            />
            <p>Survery Form</p>
          </div>
        </div>
      </div>
      <MainBody />
    </>
  );
};

export default Template;