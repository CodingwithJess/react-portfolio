import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "../img/logo.png"

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={logo}
              alt="logo"
              className="avatar-img"
            />
            <div className="banner-text">
              <hr/>
              <br/>
              <p>
                HTML/CSS | Bootstrap | JavaScript | MongoDB | Express | React |
                Node
              </p>
              <hr/>
              <br/>
              <div className="social-links">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/edens-jessica/" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-linkedin-in" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/CodingwithJess" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
