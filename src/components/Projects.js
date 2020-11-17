import React, { Component } from "react";
import {Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton,} from "react-mdl";
import projectHeader from "../img/Projects.png";

class Projects extends Component {
  render() {
    return (
    <div className="projects-grid">
    <Grid>
      <Cell col={12}>
        <img
          src={projectHeader}
          alt="Project Logo"
          className="pageHeader"
        />
      </Cell>
      <Cell col={3}>
      <Card shadow={5} style={{ minWidth: "450", margin: "auto",borderRadius:"12px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "250px",
                background:
                  "url(https://raw.githubusercontent.com/CodingwithJess/CampTracker/master/public/assets/images/CampFound-Preview.png) top / cover",
              }}
            >
              CampFound
            </CardTitle>
            <CardText>
            Ever want a way to track what campgrounds you love or would like to visit? CampFound is a great way to do that. Add places you'd love to go on your Wishlist page and add your favorite spots to the visited campgrounds page.
            </CardText>
            <CardActions border>
              <Button style ={{textAlign:"center"}} href="https://github.com/CodingwithJess/CampTracker" target="_blank" colored><i class="fab fa-github"></i> GitHub Repo</Button>
              <br/>
              <Button href="https://camp-tracker.herokuapp.com" target="_blank" colored><i class="fas fa-external-link-alt"></i> Deployed Site</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
      </Cell>
      <Cell col={3}>
      <Card shadow={5} style={{ minWidth: "450", margin: "auto",borderRadius:"12px" }}>
            <CardTitle
              style={{
                color: "#4c5b5e",
                height: "250px",
                background:
                  "url(https://raw.githubusercontent.com/CodingwithJess/Worthy-Origin/master/client/src/img/WO-preview.png) top / cover",
              }}
            >
              Worthy Origin
            </CardTitle>
            <CardText>
            Worthy Origin is an app where users can gather more information on the environmental impact of their grocery items. Users can search for food items to see what green house gas emissions are associated with each product. Users can also search for a local farmers market and login to create their own save-able grocery list. This grocery list will gives a total green house gas emissions for the entire list.
            </CardText>
            <CardActions border>
            <Button href="https://github.com/CodingwithJess/Worthy-Origin" target="_blank" colored><i class="fab fa-github"></i> GitHub Repo</Button>
              <br/>
              <Button href="https://worthyorigin.herokuapp.com/" target="_blank" colored><i class="fas fa-external-link-alt"></i> Deployed Site</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
      </Cell>
      <Cell col={3}>
      <Card shadow={5} style={{ minWidth: "450", margin: "auto", borderRadius:"12px" }}>
            <CardTitle
              style={{
                color: "#4c5b5e",
                height: "250px",
                background:
                  "url(https://raw.githubusercontent.com/CodingwithJess/moolah/master/public/icons/MoolahPreview.png) top / cover",
              }}
            >
              Moolah
            </CardTitle>
            <CardText>
            This app will allow users to keep track of a simple budget while offline as a progressive web app. The data will be stored until the user is back online where the data will be added from LocalDB into MongoDB storage.
            </CardText>
            <CardActions border>
            <Button href="https://github.com/CodingwithJess/moolah" target="_blank" colored><i class="fab fa-github"></i> GitHub Repo</Button>
              <br/>
              <Button href="https://moolah-tracker.herokuapp.com/" target="_blank" colored><i class="fas fa-external-link-alt"></i> Deployed Site</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
      </Cell>
      <Cell col={3}>
      <Card shadow={5} style={{ minWidth: "450", margin: "auto", borderRadius:"12px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "276px",
                background:
                  "url(https://raw.githubusercontent.com/CodingwithJess/FITish/master/public/img/FITishPreview.png) top / cover",
              }}
            >
              FITish
            </CardTitle>
            <CardText>
            This app allows users to view, create, and track daily workouts. This will store last workout logged so that it can be added to at a later time.
            </CardText>
            <CardActions border>
            <Button href="https://github.com/CodingwithJess/FITish" target="_blank" colored><i class="fab fa-github"></i> GitHub Repo</Button>
              <br/>
              <Button href="https://ancient-gorge-35047.herokuapp.com" target="_blank" colored><i class="fas fa-external-link-alt"></i> Deployed Site</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
      </Cell>
    </Grid>    
    </div>
    );
  };
};

export default Projects;
