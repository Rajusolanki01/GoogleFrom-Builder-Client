import React from "react";
import { FiStar, FiSettings } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { googleFormImg } from "./formAssets";
import Avatar from "../Avatar/Avatar";
import CenteredTabs from "./CenteredTabs";
import QuestionForm from "./QuestionForm";

const CreateForm = () => {
  return (
    <>
      <div className="form-header flex items-center justify-between  bg-white my-3 mx-6">
        <div className="form-header-left flex items-center justify-evenly">
          <img src={googleFormImg} alt="create-img" className="w-11 h-10" />
          <input
            type="text"
            placeholder="Untitled form"
            className="outline-none  focus:ring-white focus:border-white border-none text-m font-semibold ml-4 leading-6 text-[#202124] w-32"></input>
          <IconButton>
            <BsFolder2Open className="text-[#202124] text-2xl focus:border-b-black" />
          </IconButton>
          <IconButton>
            <FiStar className="text-[#202124] text-2xl focus:border-b-black" />
          </IconButton>
          <span className="text-sm font-semibold ml-3">
            All Changes Saved in DataBase
          </span>
        </div>
        <div className="form-header-right ">
          <IconButton>
            <ColorLensIcon
              size="small"
              className="text-[#202124] text-2xl focus:border-b-black m-1"
            />
          </IconButton>
          <IconButton>
            <AiOutlineEye className="text-[#202124] text-2xl focus:border-b-black m-1" />
          </IconButton>
          <IconButton>
            <FiSettings className="text-[#202124] text-2xl focus:border-b-black m-1" />
          </IconButton>
          <button className="px-4 py-1 bg-green-500 text-white rounded hover:bg-neutralDGrey transition-all duration-300 ">
            SEND
          </button>
          <IconButton>
            <MoreVertIcon className="text-[#202124] text-2xl focus:border-b-black m-1" />
          </IconButton>
          <IconButton>
            <Avatar />
          </IconButton>
        </div>
      </div>
      <CenteredTabs />
      <QuestionForm />
    </>
  );
};

export default CreateForm;
