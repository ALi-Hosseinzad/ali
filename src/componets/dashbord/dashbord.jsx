import React, { Component} from "react";
import "./dashbord.css";
import Grid from "@material-ui/core/Grid";
import NewButton from "./NewButtons";
import Result from "./result";


class Dashbord extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }
  
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };
  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  render() {
    return (
      <div className={["flexgrow:1" && "dashbord"]}>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="flex-start"
          alignItems="stretch"
        >
          <Result result={this.state.result} />
          <NewButton onClick={this.onClick} />
        </Grid>
      </div>
    );
  }
}
export default Dashbord;
