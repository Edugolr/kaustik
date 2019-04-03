import React, {Component} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EmailIcon from '@material-ui/icons/Email';

class BottomNav extends Component {
  render() {
    return (
      <BottomNavigation
      showLabels
      >
      <BottomNavigationAction
        label="christofer.wikman@gmail.com"
        icon={<EmailIcon />}
        href={"mailto: christofer.wikman@gmail.com"}
      />

      </BottomNavigation>
    );
  }
};

export default BottomNav;
