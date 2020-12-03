import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import users from "./users.json";
import './../userInfo.css'
import image from './../../../img/219988.svg';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const UserInfoImg = () => { 

    const handelShowImage =(id) =>{
       let newData = users.data[id].profile_image;
       if(newData === "" || newData == null){
           newData = image;
       }
        return newData; 
    }  
    const handelShowPercontage = (id) =>{
        return  users.data[id].percentage;
    }
    const handelShowName = (id) =>{
        return  users.data[id].name;
    }
    const handelShowAccount = (id) =>{
        return  users.data[id].accountID;
    }
    const handelBlackWhiteImage = (id) =>{
        let newData = users.data[id].percentage;
        if (newData<50){
            return "backwhite";
        }
        return "ProgressbarImage";
    }
    const handelShowPercentageStyle = (id) =>{
        let newData = users.data[id].percentage;
            if(newData <50){
                return "orange";
            }
           
            if(newData === 100){
                return "blue";  
            }
            if(newData>50){
                return  "green";
        }
    }
    const handelShow100Style = (id) =>{
        let newData = users.data[id].percentage;
            if(newData === 100){
                return <CheckCircleIcon className="hundred"/>;
            }
    }
    return (
           <div className="userInfo">
                <CircularProgressbarWithChildren value={handelShowPercontage(6)} strokeWidth={5} styles={buildStyles({pathColor: handelShowPercentageStyle(6)})}>
                    <div>{handelShow100Style(6)}</div>
                    <img className={handelBlackWhiteImage(6)} src={handelShowImage(6)} alt="#"/>   
                </CircularProgressbarWithChildren>
                <p className="accountName">{handelShowName(3)}</p>
                <p className="accountID"  >{handelShowAccount(3)}</p>
            </div>
            
    );
    
}
export default UserInfoImg;