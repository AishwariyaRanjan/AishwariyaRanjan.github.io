import { ArrowRightIcon, MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import React from "react";
import "./Navbar.css";

export default function Navbar() {
    // function menuFunction(){
    //     var x = document.getElementById("myTopnav");
    //     if(x.className === "n-container"){
    //         x.className += " responsive";
    //     }
    //     else{
    //         x.className = "n-container";
    //     }
    // }

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
        <header id="navbar">
            <div className="n-container" id="myTopnav">
                <div className="my-name">
                    <a href="#about" className="about-link">
                        Aishwariya Ranjan
                    </a>
                </div>
                <div id="link-div" className={isNavExpanded ? "linkdiv expanded" : "linkdiv"}>
                    <div id="navList" className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                        <nav className="section-links"> 
                            <a href="#projects" className="nav-link">
                                Past Work
                            </a>
                            <a href="#skills" className="nav-link">
                                Skills
                            </a>            
                        {/* </nav> */}
                        <a href="#contact" className="contact-link">
                            Work with Me
                            <ArrowRightIcon className="arrow-right-icon"/>
                        </a>
                        </nav>
                    </div>
                    <nav className="menu-icon-nav">
                        {/* <a href="javascript:void(0);" class="icon" onclick="menuFunction()">
                        <MenuIcon className="menu-icon" />
                        </a> */}
                        <button className="icon" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                            <MenuIcon className="menu-icon"/>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}


