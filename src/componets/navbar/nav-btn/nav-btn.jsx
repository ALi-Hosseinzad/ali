import React from "react";
import './nav-btn.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const  NavBtn= ({massege}) => {
    return (
          <div className="nav-btn">
              <div>
                <IconButton aria-label={`show ${massege} new notifications`} color="inherit">
                    <Badge badgeContent={`${massege}`} color="secondary">
                    <NotificationsNoneIcon />
                    </Badge>
                </IconButton> 
              </div>
              <div>
                <IconButton aria-label="more option" color="inherit">  
                    <MoreVertIcon />
                </IconButton> 
              </div>
              
          </div>
    );
};

export default NavBtn;

                