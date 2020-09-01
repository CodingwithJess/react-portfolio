import React, { Component } from "react";
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton,} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "276px",
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
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#4c5b5e",
                height: "276px",
                background:
                  "url(https://raw.githubusercontent.com/CodingwithJess/bobs-burgers/master/public/img/BobsBurgers.png) top / cover",
              }}
            >
              Bob's Burgers
            </CardTitle>
            <CardText>
            Bob's Burgers is burger application that allows a user to add burgers to the menu, consume the burgers, and delete them. When a burger has been eaten, it moves categories on the page.
            </CardText>
            <CardActions border>
            <Button href="https://github.com/CodingwithJess/bobs-burgers" target="_blank" colored><i class="fab fa-github"></i> GitHub Repo</Button>
              <br/>
              <Button href="https://rocky-fjord-82526.herokuapp.com" target="_blank" colored><i class="fas fa-external-link-alt"></i> Deployed Site</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#4c5b5e",
                height: "276px",
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
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          {/* Project 4 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
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
            This app allows users to view, create, and track daily workouts. 
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
        </div>
      );
    }
  }
  render() {
    return (
      <div className="project-body">
        <div className="project-content">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>1</Tab>
            <Tab>2</Tab>
            <Tab>3</Tab>
            <Tab>4</Tab>
          </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Projects;
