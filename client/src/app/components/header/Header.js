import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Menu,
  MenuItem,
  IconButton,
  AppBar,
  Toolbar,
  Button,
  Grid,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { LogoIcon } from '../../svg/LogoIcon/LogoIcon.js';
import { SignUpIcon } from '../../svg/SignUpIcon/SignUpIcon.js';
import { SignInIcon } from '../../svg/SingInIcon/SignInIcon.js';
import { Container } from '@material-ui/core';
import { styles } from './Header.MuiStyles.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      respectiveElement: null,
    };
  }

  render() {
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(this.state.respectiveElement);

    const handleMobileMenuClose = () => {
      this.setState({
        respectiveElement: null,
      });
    };

    const handleMobileMenuOpen = (event) => {
      this.setState({
        respectiveElement: event.currentTarget,
      });
    };

    const mobileMenu = (
      <Menu
        anchorEl={this.state.respectiveElement}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton
            disableRipple
            disableFocusRipple
            color='primary'
            className={classes.signUpMobileButton}
          >
            <SignUpIcon />
          </IconButton>
          <p>Sign Up</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            disableRipple
            disableFocusRipple
            color='inherit'
            className={classes.signInMobileButton}
          >
            <SignInIcon />
          </IconButton>
          <p>Sign In</p>
        </MenuItem>
      </Menu>
    );
    return (
      <div className={classes.grow}>
        <AppBar position='static' className={classes.headerBackgroundColor}>
          <Container>
            <Toolbar disableGutters>
              <Button className={classes.logoButton}>
                <LogoIcon />
                <span className={classes.logoText}>Form builder</span>
              </Button>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Grid container spacing={3}>
                  <Grid item>
                    <Button disableElevation variant='contained' size='large'>
                      Sign Up
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      disableElevation
                      variant='contained'
                      color='secondary'
                      size='large'
                    >
                      Sign in
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton onClick={handleMobileMenuOpen} color='inherit'>
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
        {mobileMenu}
      </div>
    );
  }
}

export default withStyles(styles)(Header);
