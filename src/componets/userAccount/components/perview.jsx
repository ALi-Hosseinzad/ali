import React from "react";
import '../userAcount.css';
import Data from '../../leftPanel/userInfo/users.json'
import UserInfoImg from '../../leftPanel/userInfo/userInfoImg';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import PrintIcon from '@material-ui/icons/Print';
import WebIcon from '@material-ui/icons/Web';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Grid from '@material-ui/core/Grid';
import DescriptionIcon from '@material-ui/icons/Description';
; 

const perview = () => {
  
    const userItemId = (Id) => {
        if (Id === Data.data.id) {
            return Id;
        }
    }
    const handelShowMobile = (id) => {
        return Data.data[id].mobile;
    }
    const handelShowPhone = (id) => {
        return Data.data[id].phone;
    }
    const handelShowFax = (id) => {
        return Data.data[id].fax;
    }
    const handelShowSite = (id) => {
        return Data.data[id].web;
    }
    const handelShowEmail = (id) => {
        return Data.data[id].email;
    }
    const handelShowLinkedin = (id) => {
        return Data.data[id].linkedin;
    }
    const handelShowInstagram = (id) => {
        return Data.data[id].instagram;
    }
    const handelShowTwitter = (id) => {
        return Data.data[id].twitter;
    }
    const handelShowBio = (id) => {
        return Data.data[id].bio;
    }
    const userItem = (id) => {
        return (
            <div className="accountInfoCard">
                <Card className="" variant="outlined" key={userItemId(id)}>
                    <CardContent>
                        <Typography className="cardHeader" color="textSecondary" gutterBottom>
                            اطلاعات تماس
                        </Typography>
                        <Typography className="cardText" color="textSecondary">
                            <p>{handelShowPhone(3)} <PhoneIphoneIcon /></p>
                            <p>{handelShowMobile(3)}<PhoneIcon />      </p>
                            <p>{handelShowFax(3)}   <PrintIcon />      </p>
                            <p>{handelShowSite(3)}  <WebIcon />        </p>
                            <p>{handelShowEmail(3)} <EmailIcon />      </p>
                        </Typography>
                        <hr/>
                        <Typography className="cardIcon" variant="body2" component="p">
                            <a href={handelShowLinkedin(3)} ><LinkedInIcon /> </a>
                            <a href={handelShowInstagram(3)}><InstagramIcon /></a>
                            <a href={handelShowTwitter(3)}  ><TwitterIcon />  </a>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className="cardBTN">
                            <DescriptionIcon />رزومه ساز حرفه ای
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    };
    return (
        <div>‍
            <Grid container spacing={2}> 
                <Grid item xs={8} className="account">
                    <UserInfoImg />
                    <div className="accountBIO">
                        <p>{handelShowBio(3)}</p>
                    </div>     
                </Grid>
                <Grid item xs={4}>
                    {userItem(3)}  
                </Grid>
            </Grid>
        </div>
    );
};
export default perview;