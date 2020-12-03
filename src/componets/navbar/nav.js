import React from 'react';
import './nav.css';
import NavBtn from './nav-btn/nav-btn'

class Nav extends React.Component{
 
    render(){
        return(
            <nav className="navbar">   
                <a className="logo" href="https://auth.tinet.ir/img/logo-login.png">
                    <img src="https://auth.tinet.ir/img/logo-login.png" alt="#"/>
                    <p>شبکه نوآوری و فناوری ایران 
                        <br/><span>social.tinet.ir</span>
                    </p>   
                </a>
                <div className="search">
                    <input />
                </div>
                <NavBtn massege="3"/>
            </nav>
        );
    }
}
export default Nav;