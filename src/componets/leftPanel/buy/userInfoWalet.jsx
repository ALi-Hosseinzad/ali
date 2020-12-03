import React from "react";
import users from "../userInfo/users.json";
import "./../userInfo.css";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const UserInfoWalet = () => {    
    return (
        <div>
            <div className="waletUser">
                <p className="waletUserInfo">
                    <AccountBalanceWalletIcon style={{ color: grey[500] }}/>
                    &nbsp;<span className="waletUserInfoTotal"> &nbsp;{users.data[3].total}</span>
                    &nbsp; تومان&nbsp;
                    <ArrowUpwardIcon style={{ color: green[500] }}/>&nbsp;
                    {users.data[3].send}&nbsp;
                    <ArrowDownwardIcon style={{ color: red[500] }}/>&nbsp;
                    {users.data[3].resive}
                </p>
            </div>
            <div className="waletUserBTN">
                <Button variant="outlined" borderRadius="16px"
                startIcon={<AddIcon style={{ color: green[500] }}/>}
                style={{width:"100%",margin:"auto",borderRadius: "20px"} }>
                    &nbsp; اعتبار خود را افزایش دهید
                </Button>
            </div>
        </div> 
    );
    
}
export default UserInfoWalet;