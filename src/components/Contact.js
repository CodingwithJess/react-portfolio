import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import contactHeader from "../img/ContactMe.png"


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <img
          src={contactHeader}
          alt="Project Logo"
          className="pageHeader"
        />
      <Grid className="contact-grid">
        <Cell col={6}>
          <img
            src="https://avatars1.githubusercontent.com/u/64941746?s=460&u=6f65f27759f3f66a20ba237b6a8f457428015ff9&v=4"
            alt="selfie"
            style={{ height: "250px", borderRadius: "50%" }}
          />
          <hr />
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
        </Cell>
        <Cell col={6}>
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "20px",
                    fontFamily: "Didact Gothic",
                    color: "#eebe68",
                  }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (303) 905-5419
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "20px",
                    fontFamily: "Didact Gothic",
                    color: "#eebe68",
                  }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  jess@codingwithjess.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "20px",
                    fontFamily: "Didact Gothic",
                    color: "#eebe68",
                  }}
                >
                  <i className="fab fa-github" aria-hidden="true" />
                  www.github.com/codingwithjess
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

export default Contact;
