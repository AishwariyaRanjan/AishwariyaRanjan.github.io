import { ArrowRightIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/solid";
import React from "react";
import "./Navbar.css";

export default function Navbar() {
    function menuFunction(){
        var x = document.getElementById("myTopnav");
        if(x.className === "n-container"){
            x.className += " responsive";
        }
        else{
            x.className = "n-container";
        }
    }
    return(
        <header id="navbar">
            <div className="n-container" id="myTopnav">
                <a className="my-name">
                    <a href="#about" className="about-link">
                        Aishwariya Ranjan
                    </a>
                </a>
               {/* <nav className="section-links"> */}
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
                <nav className="menu-icon-nav">
                    <a href="javascript:void(0);" class="icon" onclick="menuFunction()">
                       <MenuIcon className="menu-icon" />
                    </a>
                </nav>
            </div>
        </header>
    );
}


