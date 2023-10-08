import React from "react";
import { useEffect, useState, useRef } from "react";
//CSS
import "./Navbar.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    //change the header color while scrolling 
    const [color , setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 80) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    
    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header active' : 'header'}>
            <h2>
                CodesByFiras
            </h2>
            <nav>
                <ul className="nav--links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="menu--container" ref={menuRef}>
                    <div
                        className="toggle--btn"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        <div>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>

                    <div className={`dropDown--menu ${open ? "open" : "closed"}`}>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
};
