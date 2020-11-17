import React, { Component } from "react";
import { Grid, Cell} from "react-mdl";
import img from "../img/profile.jpeg";
import aboutMe from "../img/AboutMe.png"

class About extends Component {
  render() {
    return (
      <div className="about-body">
            <img
              src={aboutMe}
              alt="AboutMe"
              className="pageHeader"
            />
        <Grid className="about-grid">
          <Cell col={6}>
            <img
              src={img}
              alt="AboutMe"
              className="selfie"
            />
          </Cell>
          <Cell col={6}>
            <hr/>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Coding makes me feel like a witch. 
            <br/> <br/>
            I remember the first time I built a good looking and responsive website from scratch.   
            <br/><br/>*BOOM* <br/><br/>
            Magic. Right before my eyes.
            <br/>Every time I sit down to code I am in
            awe of the endless possibilities, limited only by the speed at
            which I'm able to learn and apply a new language or framework.  
            <br/><br/> I am an aspiring full-stack web developer who has a deep passion for
            brewing up web designs, conquering bugs, integrating fully
            responsive mobile friendly sites, building servers, incorporating
            API's, mastering git collaboration, and continuing to learn in a
            fast changing industry.  
            <br/> <br/>Full-stack web development also calls to
            many of my best qualities. The artistic and endlessly creative
            side of Front End, and the analytical and robust side of Back End.
            Coding has me spellbound and I cannot wait to see where the
            journey takes me.
            </p>
            <br/>
            <hr/>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
