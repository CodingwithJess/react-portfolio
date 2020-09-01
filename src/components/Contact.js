import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Jessica Edens</h2>
            <img
              src="https://avatars1.githubusercontent.com/u/64941746?s=460&u=6f65f27759f3f66a20ba237b6a8f457428015ff9&v=4"
              alt="selfie"
              style={{ height: "250px", borderRadius:"50%" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Didact Gothic", color:"#eebe68"}}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (303) 905-5419
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Didact Gothic", color:"#eebe68" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    jess@codingwithjess.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Didact Gothic",color:"#eebe68" }}
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
