import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Image, Icon, Grid } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "#ccc", fontSize: "22px" };
    return (
        <Menu className="topmenu">
            <Menu.Item><Image src="http://courses.ics.hawaii.edu/ics314s18/morea/ui-frameworks/hard-rock-logo.png"/></Menu.Item>
            <Menu.Item style={itemStyle} position="right">CAFES</Menu.Item>
            <Menu.Item style={itemStyle}>HOTELS</Menu.Item>
            <Menu.Item style={itemStyle}>CASINOS</Menu.Item>
            <Menu.Item style={itemStyle}>LIVE</Menu.Item>
            <Menu.Item style={itemStyle}>SHOP</Menu.Item>
            <Menu.Item style={itemStyle}>BLOG</Menu.Item>
            <Menu.Item style={itemStyle}>REWARDS</Menu.Item>
        </Menu>
    )
  }
}

class Middle extends React.Component {
  render() {
    return (
        <Image fluid src="http://www.hardrock.com/cafes/honolulu/files/2384/Honolulu_Entrance.jpg" />
    )
  }
}

class Bottom extends React.Component {
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
    )
  }
}

class HardRock extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Middle/>
          <Bottom/>
        </div>
    );
  }
}

ReactDOM.render(<HardRock/>, document.getElementById('root'));