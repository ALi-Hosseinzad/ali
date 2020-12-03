import React from "react";
import "./toolbar.css";
import ToolbarData from "./toolbar.json";
import { compose, withState, withHandlers } from "recompose";
import styled from "styled-components";

const enchancer = compose(
  withState("selectedTabId", "setSelectedTabId", 1),
  withHandlers({
    isActive: (props) => (id) => {
      return props.selectedTabId === id;
    },
    setActiveTab: (props) => (id) => {
      props.setSelectedTabId(id);
    },
  })
);
const Tabs = enchancer((props) => {
  return (
    <ul className="toolbarItems">
      {props.data.map((el, i) => {
        return (
          <Tab
            key={i}
            content={el.name}
            isActive={props.isActive(el.id)}
            onActiveTab={() => props.setActiveTab(el.id)}
          />
        );
      })}
    </ul>
  );
});
const Tab = (props) => {
  return (
    <StyledLi
      className="toolbarItem"
      isActive={props.isActive}
      onClick={props.onActiveTab}
    >
      <p>{props.content}</p>
    </StyledLi>
  );
};

// const Panel = (props) => {
//   return <ChangePanel />;
// };
const StyledLi = styled.li`
  font-weight: ${({ isActive }) => (isActive ? 600 : 100)};
  border-bottom: ${({ isActive }) => (isActive ? "solid 2px green" : null)};
  cursor: pointer;
  font-family: BYekan;
  transition: 20ms all linear;
`;
const ResponsiveNavbarView = () => {
  const url = window.location.href.split("/").pop();
  const vals = Object.keys(ToolbarData);
  // const obj = { a: 1 , b:"ali"};
  // const copy = Object.assign({}, obj);
  // console.log(copy);
  const list = [1,2,3,4,5,6,7,8,9,10];
  console.log(list.copyWithin(3,6,8));
  for (var i = 0; i < vals.length; i++) {
    if (vals[i] === url) {
      const list = vals[i];
      return (
        <div className="toolbar">
          <Tabs data={Object.values(ToolbarData[list])} />
          {/* <Panel /> */}
        </div>
      );
    }
  }
};
export default ResponsiveNavbarView;
