import React from "react";
import './../userInfo.css';
import News from './news.json'
import FiberNewIcon from '@material-ui/icons/FiberNew';
import {grey} from '@material-ui/core/colors'

const UserInfoNews = () => {   
    const newsItem = (   
        <ul className="list">
            {News.news.map((news) =>
                <li key={news.id} className="list-item">
                    <a href={news.href} target="_blank" rel="noopener noreferrer">{news.text} </a>
                </li>
            )}
        </ul>
    );
        return (
            <div className="news">
                <hr className="newsHr"/>
                <p className="newsHeader"><FiberNewIcon style={{ color: grey[300],marginLeft:"10px"}}/>تازه ها :</p>
                {newsItem}
            </div>
            );
    };
export default UserInfoNews;