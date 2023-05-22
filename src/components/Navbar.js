import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar-container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className={`links ${isOpen ? "open" : ""}`}>
                <div class="asd">
                    <div class="arrow"></div>
                    <a>About</a>
                    <a>Services</a>
                    <a>Projects</a>
                    <a>Contact</a>
                </div>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <i class={`fa-solid ${isOpen ? "fa-close" : "fa-bars"} `}></i>
            </div>
        </div>
    );
}
