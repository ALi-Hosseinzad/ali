import React from "react";
import Perview from "../userAccount/components/perview";
import "./toolbar.css";
import ToolbarData from "./toolbar.json";
import Masseges from "../userAccount/components/masseges";
import PrivacySettings from "../userAccount/components/privacySettings";
import ProfessionalInformation from "../userAccount/components/professionalInformation";
import UserAccountInformation from "../userAccount/components/userAccountInformation";
import ReceivedServices from "../userAccount/components/receivedServices";
import Wallet from "../wallet/Wallet";
import Pardis from "../pardis/Pardis";
import Markets from "../markets/Markets";

const ChangePanel = () => {
  const project = (props) => {
    const url = window.location.href.split("/").pop();
    const vals = Object.keys(ToolbarData);
    for (var i = 0; i < vals.length; i++) {
      if (vals[i] === url) {
        const list = vals[i];
        const item = Object.values(ToolbarData[list]);
        const main = document.getElementsByClassName("main");

        if (list === "userAccount") {
          switch (item.id) {
            case "0":
              return <Perview />;
            case "1":
              return <Masseges />;
            case "2":
              return <PrivacySettings />;
            case "3":
              return <ProfessionalInformation />;
            case "4":
              return <UserAccountInformation />;
            case "5":
              return <ReceivedServices />;

            default:
              return <Perview />;
          }
        }
        if (list === "wallet") {
          switch (item.id) {
            case "0":
              return <Wallet />;
            case "1":
              return <Masseges />;
            case "2":
              return <PrivacySettings />;
            case "3":
              return <ProfessionalInformation />;
            case "4":
              return <UserAccountInformation />;
            case "5":
              return <ReceivedServices />;

            default:
              return <Perview />;
          }
        }
        if (list === "pardis") {
          switch (item.id) {
            case "0":
              return <Pardis />;
            case "1":
              return <Masseges />;
            case "2":
              return <PrivacySettings />;
            case "3":
              return <ProfessionalInformation />;
            case "4":
              return <UserAccountInformation />;
            case "5":
              return <ReceivedServices />;

            default:
              return <Perview />;
          }
        }
        if (list === "markets") {
          switch (item.id) {
            case "0":
              return <Markets />;
            case "1":
              return <Masseges />;
            case "2":
              return <PrivacySettings />;
            case "3":
              return <ProfessionalInformation />;
            case "4":
              return <UserAccountInformation />;
            case "5":
              return <ReceivedServices />;

            default:
              return <Perview />;
          }
        }
      }
    }
  };
  // const main = () => {};

  return <main>{project}</main>;
};
export default ChangePanel;
