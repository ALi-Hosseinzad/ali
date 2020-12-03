import React, { useState } from "react";
import "./toolbar.css";
import ToolbarData from "./toolbar.json";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
//import styled from "styled-components";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ToolBar = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const isActive = props => id => {
    return value === id;
  };
  
  const handleActive = props => id => {
    setValue(id);
  };
  const CustomTab = ({ children }) => (
    <Tab>
      <div>{children}</div>
    </Tab>
  );
  const className = isActive ? "active" : "";
  CustomTab.tabsRole = "Tab";
  const CustomTabPanel = ({ children, myCustomProp, ...otherProps }) => (
    <TabPanel {...otherProps}>
      <div>{children}</div>
      {myCustomProp && `myCustomProp: ${myCustomProp}`}
    </TabPanel>
  );

  CustomTabPanel.tabsRole = "TabPanel";
  const url = window.location.href.split("/").pop();
  const vals = Object.keys(ToolbarData);
  for (var i = 0; i < vals.length; i++) {
    if (vals[i] === url) {
      const list = vals[i];
      return (
        <div className="toolbar">
          {Object.values(ToolbarData[list]).map((item, i) => (
            <div className={classes.root}>
              <Tabs
                key={i}
                isActive={isActive(item.id)}
                onActiveTab={(props) => props.handleActive(item.id)}
              >
                <TabList>
                  <CustomTab
                    className={className}
                    isActive={props.isActive}
                    onClick={props.onActiveTab}
                  >
                    {item.name}
                  </CustomTab>
                </TabList>
              </Tabs>
              {/* <CustomTab children={item.name} /> */}
            </div>
          ))}
        </div>
      );
    }
  }
};
export default ToolBar;
