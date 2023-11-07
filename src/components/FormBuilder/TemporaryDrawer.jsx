import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";
import { FiSettings } from "react-icons/fi";
import { BsQuestionSquare } from "react-icons/bs";
import { img1, img2, img3, img4 } from "./formAssets";

const TemporaryDrawer = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ width: "250px" }} role="presentation">
      <Divider>
        <List>
          <ListItem>
            <ListItemText
              style={{
                fontSize: "48",
                marginLeft: "5px",
                borderBottom: "1px solid Black",
              }}
            >
              <img src={logo} alt="logo" className="w-24 h-24 ml-10" />
              <span className="text-green-500 font-semibold text-2xl">F</span>
              <span className="text-green-500 font-semibold text-2xl">O</span>
              <span className="text-green-500 font-semibold text-2xl">R</span>
              <span className="text-green-500 font-semibold text-2xl">M</span>
              <span className="text-green-500 font-semibold text-2xl">S</span>
              <span className="text-black font-semibold text-2xl">
                {""} Builder
              </span>
            </ListItemText>
          </ListItem>
        </List>
      </Divider>
      <List>
        <ListItem className="bg-white hover:rounded-full hover:bg-slate-100 ">
          <img className="w-8 h-8" src={img1} alt="logo" />
          <div className="ml-5 text-[14px] font-[500] text-neutralDGrey ">
            Calender
          </div>
        </ListItem>
        <ListItem className="bg-white hover:rounded-full hover:bg-slate-100">
          <img className="w-8 h-8" src={img2} alt="logo" />
          <div className="ml-5 text-[14px] font-[500] text-neutralDGrey">
            Print
          </div>
        </ListItem>
        <ListItem className="bg-white hover:rounded-full hover:bg-slate-100">
          <img className="w-8 h-8" src={img3} alt="logo" />
          <div className="ml-5 text-[14px] font-[500] text-neutralDGrey">
            Stats
          </div>
        </ListItem>
        <ListItem className="bg-white hover:rounded-full hover:bg-slate-100">
          <img className="w-8 h-8" src={img4} alt="logo" />
          <div className="ml-5 text-[14px] font-[500] text-neutralDGrey">
            Docs
          </div>
        </ListItem>
      </List>
      <Divider />
      <List className="mx-2 mt-4">
        <ListItem>
          <FiSettings />
          <div className="ml-5 text-[14px]  text-neutralDGrey">Setting</div>
        </ListItem>
        <ListItem className="">
          <BsQuestionSquare />
          <div className="ml-5 text-[14px] text-neutralDGrey">
            Help & FeedBack
          </div>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <React.Fragment>
        <button className="btn" onClick={toggleDrawer("left", true)}>
          <span className="icon">
            <svg viewBox="0 0 175 80" width="27" height="27">
              <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            </svg>
          </span>
          <span className="text">MENU</span>
        </button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;