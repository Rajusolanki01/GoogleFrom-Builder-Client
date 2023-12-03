import React, { useState } from "react";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
// import MoreVert from "@mui/icons-material/MoreVert";
import Select from "@mui/material/Select";
// import FormControl from "@mui/material/FormControl";
// import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import TextFieldsIcon from "@mui/icons-material/TextFields";
// import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";
// import { BsTrash, BsFileText } from "react-icons/bs";
// import { FcRightUp } from "react-icons/fc";

const QuestionForm = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "Which is the captial city of Karnataka ?",
      questionType: "radio",
      options: [
        { optionText: "Bengaluru" },
        { optionText: "Belgvi" },
        { optionText: "Hubli" },
        { optionText: "Mandya" },
      ],
      open: true,
      required: false,
    },
  ]);

  const questionsUI = () => {
    return questions.map((ques, i) => (
      <div>
        <Accordion
          style={{ margin: "0px" }}
          expanded={questions[i].open}
          key={i}
          className={questions[i].open ? "add_border" : ""}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            elevation={1}
            style={{ width: "100%" }}>
            {/* {questions[i].open ? (
              <div className="saved-questions">
                <Typography
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: ".1px",
                    lineHeight: "24px",
                    paddingBottom: "8px",
                  }}>
                  {i + 1}. {questions[i].questionText}
                </Typography>
                {ques.options.map((op, j) => (
                  <div key={j}>
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        disabled
                        control={
                          <input
                            type={ques.questionType}
                            color="primary"
                            style={{ marginRight: "5px" }}
                            required={ques.type}
                          />
                        }
                        label={
                          <Typography
                            style={{
                              fontFamily: "Roboto, Arial, sans-serif",
                              fontSize: "13px",
                              fontWeight: "400",
                              letterSpacing: ".2px",
                              lineHeight: "20px",
                              color: "#2021240",
                            }}>
                            {ques.options[j].optionText}
                          </Typography>
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : 
              ""
            } */}
          </AccordionSummary>
          <div className="question-boxes flex flex-row items-center">
            <AccordionDetails className="add-question bg-white rounded-lg py-7 px-5 capitalize flex flex-col w-[94%] pt-0 ml-3">
              <div className="add-question-top flex flex-row items-center justify-between">
                <input
                  type="text"
                  className="questions box-border mt-3 font-sans text-[15px] leading-4  font-normal flex-1 h-10 w-[40%] border-none outline-none text-black mr-3 p-3 border-t-8 border-green-500 focus:ring-white focus:border-white  bg-[#f4f4f9] mb-3"
                  placeholder="Question"
                  value={ques.questionText}></input>
                <CropOriginalIcon style={{ color: "#5f6368" }} />
                <Select
                  className="select h-10 w-60 bg-transparent border-2 outline-none border-none rounded-sm  px-4 text-black mx-3"
                  style={{ color: "5f6368", fontSize: "13px" }}>
                  <MenuItem id="">
                  </MenuItem>{" "}
                  <MenuItem id="text" value="Text">
                    <SubjectIcon style={{ marginRight: "10px" }} /> Paragraph
                  </MenuItem>{" "}
                  <MenuItem id="checkbox" value="Checkbox">
                    <CheckBoxOutlineBlankIcon
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    />{" "}
                    Checkboxes
                  </MenuItem>{" "}
                  <MenuItem id="radio" value="Radio">
                    <Radio
                      style={{ marginRight: "-2px", color: "#70757a" }}
                      checked
                    />{" "}
                    Multiple Choice
                  </MenuItem>
                </Select>
              </div>
              {ques.options.map((op, j) => (
                <div className="add-question-body flex items-center" key={j}>
                  {ques.questionType !== "text" ? (
                    <input
                      type={ques.questionType}
                      style={{ marginRight: "10px" }}
                    />
                  ) : (
                    <ShortTextIcon style={{ marginRight: "10px" }} />
                  )}
                  <div>
                    <input
                      type="text"
                      className=" text-input outline-none border-none h-8 w-[490px] text-[#202124] tracking-widest focus:border-b-green-400 focus:border-white focus:ring-white"
                      placeholder="option"
                      value={ques.options[j].optionText}
                    />
                  </div>
                  <CropOriginalIcon style={{ color: "#5f6368" }} />
                  <IconButton aria-label="delete">
                    <CloseIcon />
                  </IconButton>
                </div>
              ))}
            </AccordionDetails>
          </div>
        </Accordion>
      </div>
    ));
  };
  return (
    <div>
      <div className="question-form bg-[#f4f4f9] h-[100%] pb-6">
        <br />
        <div className="section m-auto w-[50%]">
          <div className="ouestion-title-section">
            <div className="question-form-top bg-white border-t-8 border-green-500  rounded-lg px-8 py-7 capitalize">
              <input
                type="text"
                className="question-form-top-name text-black box-border focus:ring-white focus:border-white font-body text-3xl leading-10 font-normal w-full border-none outline-none h-[35px]"
                placeholder="Untitled Document"
              />
              <input
                type="text"
                className="question-form-top-desc text-black-200 box-border  focus:ring-white focus:border-white font-body mt-4 text-sm leading-10  w-full border-none outline-none h-[20px]"
                placeholder="Add form description"
              />
            </div>
          </div>
          {questionsUI()}
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
