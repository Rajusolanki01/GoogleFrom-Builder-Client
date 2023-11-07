import React from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


const CenteredTabs = () => {
  return (
    <Paper style={{ flexGrow: 1 }}>
      <Tabs textColor="primary" indicatorColor="primary" centered>
        <Tab
          label="Questions"
          style={{
            fontSize: "1rem",
            color: "#5f6368",
            textTransform: "capitalize",
            height: "10px",
            fontWeight: 600,
            fontFamily: "Google sans,Roboto,Arial,sans-serif",
          }}
        ></Tab>
        <Tab
          label="Responses"
          style={{
            fontSize: "1rem",
            color: "#5f6368",
            textTransform: "capitalize",
            height: "10px",
            fontWeight: 600,
            fontFamily: "Google sans,Roboto,Arial,sans-serif",
          }}
        ></Tab>
      </Tabs>
    </Paper>
  );
};

export default CenteredTabs;