import React from 'react';
import { withRouter } from "react-router-dom";

const UserAccount = props => {
  return (
    <div className="userAccount">
        <div>{props.children}</div>     
     </div>
  );
}
export default withRouter(UserAccount);
