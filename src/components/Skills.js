import React, { Component } from "react";
import { Grid, Cell} from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div>
            <ul class="mdc-list mdc-list--two-line">
              <li class="mdc-list-item" tabindex="0">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">
                  <span class="mdc-list-item__primary-text">Two-line item</span>
                  <span class="mdc-list-item__secondary-text">
                    Secondary text
                  </span>
                </span>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">
                  <span class="mdc-list-item__primary-text">Two-line item</span>
                  <span class="mdc-list-item__secondary-text">
                    Secondary text
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
