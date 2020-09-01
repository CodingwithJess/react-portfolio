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
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button href="https://www.linkedin.com/in/edens-jessica/" target="_blank" colored>GitHub</Button>
              <Button href="https://www.linkedin.com/in/edens-jessica/" target="_blank" colored>Live Demo</Button>
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
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button href="https://www.linkedin.com/in/edens-jessica/" target="_blank" colored>GitHub</Button>
              <Button href="https://www.linkedin.com/in/edens-jessica/" target="_blank" colored>Live Demo</Button>
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
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button href="https://www.linkedin.com/in/edens-jessica/" target="_blank" colored>GitHub</Button>
              <Button href="https://www.linkedin.com/in/edens-jessica/" target="_blank" colored>Live Demo</Button>
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
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              Project #4
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button href="https://www.linkedin.com/in/edens-jessica/" target="_blank" colored>GitHub</Button>
              <Button href="https://www.linkedin.com/in/edens-jessica/" target="_blank" colored>Live Demo</Button>
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
            <Tab>Project 1</Tab>
            <Tab>Project 2</Tab>
            <Tab>Project 3</Tab>
            <Tab>Project 4</Tab>
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
