import React from "react"
import "./About.css"
//import swing_pic from "../../assets/swing_img.jpg"
import josh_pic from "../../assets/josh.webp"


const About = () => {
   return (
      <div id="about" className="about">
         <div className="about-title">
            <h1>About Me</h1>
         </div>
         <div className="about-sections">
            <div className="about-left">
               <img src={josh_pic} alt="Photo of me and Ned on a swing" />
            </div>
            <div className="about-right">
               <div className="about-para">
                  <p>My name is Joshua Thompson and this personal portfolio website is my attempt to display all of my hobbies, interests and projects! I hope you find it interesting and I would love to hear any great insights or queries at joshua.thompson@durham.ac.uk</p>
                  <h2>Education</h2>
                  <ul>
                     <li>I am currently in my penultimate 3rd year of studying for a Msci Joint Honours degree (currently on track for a first) in <b>Mathematics and Computer Science at Durham University</b>.</li>
                     <li>Particular interests of mine include AI, statistical modelling and working interpersonally. I am particularly driven by the use of 
                        technology for sustainable solutions, such as green energy projects, smart cities and modelling of worldwide events and patterns. This philantrhopic desire is always apparent in my decision-making, 
                        and I consider my values a priority in the way I govern myself, within my subject as well as during my pasttimes.</li>
                        <li>Within my college (Van Mildert) I take part in many clubs and societies.</li>
                  </ul>
               </div>
               
               <div className="about-skills">
                  <div className="about-skill">
                     <p>Communication</p><hr style={{width:"80%"}}/>
                  </div>
                  <div className="about-skill">
                     <p>Teamwork</p><hr style={{width:"70%"}}/>
                  </div>
                  <div className="about-skill">
                     <p>Resilience</p><hr style={{width:"70%"}}/>
                  </div>
               </div>
            </div>
         </div>

         <div className="about-achievements">
            <div className="about-achievement">
               <h1>1st</h1>
               <p>Current Grade</p>
            </div>
            <hr />
            <div className="about-achievement">
               <h1>3 SIs</h1>
               <p>Data consulting/engineering experience</p>
            </div>
            <hr />
            <div className="about-achievement">
               <h1>3+ Years</h1>
               <p>Volunteering Experience</p>
            </div>
            <hr />
         </div>

         <div className="about-sections">
            <div className="about-para">
               <h1>Societies and Groups</h1>
               <h2>Sporting Pursuits</h2>
               <ul>
                  <li>President - Van Mildert (VM) Tennis Club</li>
                  <li>Co-Captain - VM Hockey Club</li>
                  <li>Leading Member - VM Running Club</li>
               </ul>

               <h2>Societies</h2>
               <ul>
                  <li>Code Club Volunteer - Weekly sessions to teach 8-14 year old children coding skills</li>
                  <li>VM Webcomm - Help maintain college website</li>
               </ul>

            </div>
         </div>
         
      </div>
      
   )
}

export default About