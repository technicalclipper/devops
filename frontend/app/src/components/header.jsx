import React from "react"; 
import './header.css'
                                                                

export default function Header(){
    return(
        <div className="header">
            <div className="header-title">
                <img  className="header-logo" src="images/pclogo.jpg" alt="PC Logo"/>
                <p>BUILD YOUR PC</p>
            </div>
            <div className="header-links">
                <p>HOME</p>
                <p>ABOUT</p>
                <p>PCBUILD</p>
                <div className="header-loginbtn">
                    LOGIN
                </div>
            </div>
        </div>
    );
}

