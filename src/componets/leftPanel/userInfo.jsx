import React from "react";
import "./userInfo.css";
import UserInfoImg from "./userInfo/userInfoImg";
import UserInfoSer from "./services/userInfoSer";
import UserInfoWalet from "./buy/userInfoWalet";
import UserInfoNews from "./news/userInfoNews";

const UserInfo = () => {
  return (
    <div>
      <UserInfoImg />
      <UserInfoSer />
      <UserInfoWalet />
      <UserInfoNews />
    </div>
  );
};

export default UserInfo;
