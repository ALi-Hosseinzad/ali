import React from "react";
import Nav from "../navbar/nav";
import Menu from "../menu/menu";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UserInfo from "../leftPanel/userInfo";
import { withRouter } from "react-router-dom";
import Toolbar from "../toolbar/newtool";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const MainLayout = (props) => {
  const classes = useStyles();
  const { pathname } = props.location;

  // const setToolbar = (props) => {
    
  //   if (props.location === "/"){
     
  //     return null;
  //   }
  //   else{
  //     return <Toolbar />;
  //   }
  // };
  return (
    <div className={classes.root}>
      ‍
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Nav />``
        </Grid>
        <Grid item xs={2}>
          <Menu />
        </Grid>
        <Grid item xs={7}>
          {pathname !== "/" ? <Toolbar /> : null}
          <div className ="main">{props.children}</div>
        </Grid>
        <Grid item xs={3}>
          <UserInfo />
        </Grid>
      </Grid>
    </div>
  );
};
export default withRouter(MainLayout);
