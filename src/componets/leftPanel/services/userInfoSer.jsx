import React from "react";
import users from "./../userInfo/users.json";
import './../userInfo.css'




const UserInfoSer = () => { 

    const handelShowMarketService = (id) =>{
        return  users.data[id].marketService;
    }
    const handelShowPardisService = (id) =>{
        return  users.data[id].pardisService;
    } 
   
    return (   
        <div className="userInfoService">
            <div className="infoPart">
                <p className="infoPartPar">خدمات دریافتی  </p>
                <p className="infoPartPar"> از&nbsp;<span className="infoPartSpan">پردیس ها </span></p>
                <p className="infoPartNum num1">{handelShowPardisService(3)}</p>
            </div>
            <div className="infoPart">
                <p className="infoPartPar">خدمات دریافتی</p>
                <p className="infoPartPar"> از&nbsp;<span className="infoPartSpan">بازارها </span></p>
                <p className="infoPartNum num2">{handelShowMarketService(3)}</p>
            </div>
        </div>
    );
    
}
export default UserInfoSer;