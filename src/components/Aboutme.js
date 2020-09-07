import React, { Component } from "react";
import { Grid, Cell} from "react-mdl";
import img from "../img/profile.jpeg";
import aboutMe from "../img/AboutMe.png"

class About extends Component {
  render() {
    return (
      <div className="about-body" style={{ width: "100%", margin: "auto" }}>
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
              <p>
                HTML/CSS | Bootstrap | JavaScript | MongoDB | Express | React |
                Node›
              </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
