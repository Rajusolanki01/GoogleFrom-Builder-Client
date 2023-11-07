import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import AddToDriveRoundedIcon from "@mui/icons-material/AddToDriveRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import { IconButton } from "@mui/material";
import MoreVert from "@mui/icons-material/MoreVert";
import { recentProduct } from "./formAssets";



const MainBody = () => {
  return (
    <div className="main-body bg-white mx-40">
      <div className="mainbody-top flex mt-4 flex-row justify-between items-center">
        <div className="mainbody-top-left text-lg font-semibold">
          Recent Forms
        </div>
        <div className="mainbody-top-right flex items-center">
          <div className="mainbody-top-center  mr-32 flex box-content items-center  p-4 rounded-6 text-base">
            Owned By Anyone <KeyboardArrowDownRoundedIcon />
          </div>
          <IconButton>
            <AddToDriveRoundedIcon className="text-base text-black" />
          </IconButton>
          <IconButton>
            <FolderOpenRoundedIcon className="text-base text-black" />
          </IconButton>
        </div>
      </div>

      <div className="flex flex-wrap flex-col justify-start mt-5">
        <div className=" flex flex-col box-border w-52  mr-5 hover:border hover:border-1 hover:border-solid hover:border-green-500">
          <img
            src={recentProduct}
            alt="doc_image"
            className=" box-border h-40 w-52"
          />{" "}
        </div>
        <div className="flex flex-row justify-start gap-2 mt-1">
          <AddToDriveRoundedIcon className="text-sm text-black bg-green-500 p-1 rounded" />
          <div className="flex flex-row items-center">
            <h5 className="text-neutralDGrey text-m">Opened 6 Nov 2023</h5>
          </div>
          <MoreVert className=" text-base text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default MainBody;