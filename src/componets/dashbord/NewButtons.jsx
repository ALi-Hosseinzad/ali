import React, { Component} from "react";
import "./dashbord.css";
import Grid from "@material-ui/core/Grid";

class NewButtons extends Component {

  render() {
  return (
        <Grid
          item
          xs={12}
          className="literals"
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={2} className="part1">
            <button name="+" onClick={e => this.props.onClick(e.target.name)}> + </button>
            <button name="-" onClick={e => this.props.onClick(e.target.name)}> - </button>
            <button name="*" onClick={e => this.props.onClick(e.target.name)}> x </button>
            <button name="C" onClick={e => this.props.onClick(e.target.name)} class="diff"> C</button>
          </Grid>          
          <Grid item xs={2} className="part1">
            <button name="/"   onClick={e => this.props.onClick(e.target.name)}> ÷       </button>
            <button name="%"   onClick={e => this.props.onClick(e.target.name)}> %       </button>
            <button name="^" onClick={e => this.props.onClick(e.target.name)}> x&sup2; </button>
            <button name="CE" onClick={e => this.props.onClick(e.target.name)} class="diff">CE</button>
          </Grid>
          <Grid item xs={8} className="part2">
            <button name="1" onClick={e => this.props.onClick(e.target.name)}> 1 </button>
            <button name="2" onClick={e => this.props.onClick(e.target.name)}> 2 </button>
            <button name="3" onClick={e => this.props.onClick(e.target.name)}> 3 </button>
            <button name="4" onClick={e => this.props.onClick(e.target.name)}> 4 </button>
            <button name="5" onClick={e => this.props.onClick(e.target.name)}> 5 </button>
            <button name="6" onClick={e => this.props.onClick(e.target.name)}> 6 </button>
            <button name="7" onClick={e => this.props.onClick(e.target.name)}> 7 </button>
            <button name="8" onClick={e => this.props.onClick(e.target.name)}> 8 </button>
            <button name="9" onClick={e => this.props.onClick(e.target.name)}> 9 </button>
            <button name="0" onClick={e => this.props.onClick(e.target.name)}> 0 </button>
            <button name="." onClick={e => this.props.onClick(e.target.name)}> . </button>
            <button name="=" onClick={e => this.props.onClick(e.target.name)}> = </button>
          </Grid>
        </Grid>
  );
};
};
export default NewButtons;
