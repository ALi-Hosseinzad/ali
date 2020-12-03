import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashbord from "../dashbord/dashbord";
import Markets from "../markets/Markets";
import Pardis from "../pardis/Pardis";
import Wallet from "../wallet/Wallet";
import MainLayout from "./MainLayout";
import Perview from "../userAccount/components/perview";
import { Provider } from "react-redux";
import { store } from "../markets/redux/store/index";

const MenuLayout = (props) => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={Dashbord} />
        <Route path="/userAccount" exact component={Perview} />
        <Route path="/dashbord" exact component={Dashbord} />
        <Route path="/markets" exact>
          <Provider store={store}>
            <Markets />
          </Provider>
        </Route>

        <Route path="/pardis" exact component={Pardis} />
        <Route path="/wallet" exact component={Wallet} />
      </Switch>
    </MainLayout>
  );
};

export default MenuLayout;
