import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer-top">
            <div className="footer-top-left">
               <p>I hope you have enjoyed my website. It is very much a work in progress, so I would love to hear any advice or features you would love to see here.</p>
            </div>
         </div>
         <hr/>
         <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Joshua Thompson. All rights reserved.</p>
            <div className="footer-bottom-right">
               <Link to="/policy"><p>Privacy Policy</p></Link>
               <p><a href="https://www.linkedin.com/in/joshuamichaelthompson/" target="_blank">Connect with me</a></p>
            </div>
         </div>

      </div>
   )
}

export default Footer