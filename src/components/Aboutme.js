import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import img from "../img/profile.jpeg"

class About extends Component {
  render() {
    return(
      <div className="about-body">
        <Grid className="about-grid">
        <Cell col={12}>
            <h2>About Me</h2>
            <hr />
        </Cell>
          <Cell col={6}>
            <img
              src={img}
              alt="selfie"
              style={{ height: "350px", borderRadius:"50%" }}
            />
          </Cell>
          <Cell col={6}>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </Cell>
            <br/>
          <br/>
            <hr />
          <Cell col={12}>
            <h2>Resume</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Didact Gothic", color:"#eebe68"}}>
                    <i class="far fa-file"/>
                    <br/>
                    PDF
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;