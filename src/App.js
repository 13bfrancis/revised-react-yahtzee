import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Scorecard from './Scorecard';

const styles = {
  grow: {
    flexGrow: 1
  }
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

class App extends Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    const { classes } = this.props;
    return (
      <Container>
        <AppBar position="relative">
          <ToolBar>
            <Typography
              variant="title"
              className={classes.grow}
              color="secondary"
            >
              Yahtzee
            </Typography>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Game" />
              <Tab label="Scorecard" />
            </Tabs>
          </ToolBar>
        </AppBar>
        {value === 0 && <Typography variant="title">Game</Typography>}
        {value === 1 && <Scorecard />}
      </Container>
    );
  }
}

export default withStyles(styles)(App);
