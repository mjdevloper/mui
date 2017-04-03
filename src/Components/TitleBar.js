import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class TitleBar extends React.Component {
  render() {
    return <AppBar
    title="Medefy Web App"
    onTitleTouchTap={this.props.showMenu}
     /> 
  }
} 

{/*iconElementRight={<IconButton><NavigationMenu /></IconButton>}  */}


export default TitleBar;