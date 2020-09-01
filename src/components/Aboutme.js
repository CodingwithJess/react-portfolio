import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import img from "../img/profile.jpeg";

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={12}>
            <h2>About Me</h2>
          </Cell>
          <Cell col={6}>
            <img
              src={img}
              alt="selfie"
              style={{ height: "350px"}}
            />
          </Cell>
          <Cell col={6}>
            <p style={{ width: "85%", margin: "auto", paddingTop: "1em", fontSize:"18px"}}>
            My name is Jessica and I am currently in the fulltime coding program through the University of Denver. We are currently learning React.js. I am looking forward to learning more and expanding my skills and knowledge on a daily basis.
            
            </p>
            <p style={{ width: "85%", margin: "auto", paddingTop: "1em",fontSize:"18px" }}>
            
            After finishing class, I hope to find a full time Junior Web Developer job. I am open to relocating almost anywhere in the US! I appreciate companies that are open to training on the job, have collaborative teams, and believe in open communication and having fun!
            </p>
          </Cell>
          <hr />
          <Cell col={12}>
            <hr />
            <h2>Resume</h2>
            <div className="about-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "20px",
                      fontFamily: "Didact Gothic",
                      color: "#eebe68",
                      textAlign: "center"
                    }}
                  >
                    <i class="far fa-file" />
                    <br />
                    PDF
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
