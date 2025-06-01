import React, { useState, useRef } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./Navbar.css"
import logo from "../../assets/ufo.png"
import menu_icon from "../../assets/menu-icon.svg"
import menu_close from "../../assets/menu-close.svg"

const Navbar = () => {

   const [menu, setMenu] = useState("home");
   const menuRef = useRef();

   const openMenu = () => {
      menuRef.current.style.right="0";
   }
   const closeMenu = () => {
      menuRef.current.style.right="-350px";
   }

   return (
      <div className="navbar">
         <img src={menu_icon} onClick={openMenu} alt="" className="nav-mob-open"/>

         <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close"/>
            <li><AnchorLink className="anchor-link" href="#home"><p className="nav__link" onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#about"><p className="nav__link" onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#projects"><p className="nav__link" onClick={()=>setMenu("projects")}>Projects</p></AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p className="nav__link" onClick={()=>setMenu("contact")}>Contact Me</p></AnchorLink></li>
         </ul>
         <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>

      </div>
   )
}

export default Navbar