import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

export default class Bottom extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid>
            <Grid.Row centered className="footer-one">
              HARD ROCK CAFE HONOLULU
            </Grid.Row>
            <Grid.Row centered>
              <Icon name="phone"/>
              +1-808-955-7383 &nbsp;
              <Icon name="mail"/>
              Email us &nbsp;
              <Icon name="home"/>
              280 Beachwalk, Honolulu, Hawaii 96815 &nbsp;
              <Icon name="twitter"/>
              <Icon name="facebook f"/>
              <Icon name="instagram"/>
              <Icon name="pinterest"/>
              <Icon name="tripadvisor"/>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
