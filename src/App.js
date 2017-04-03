import React, { Component } from 'react';

import TitleBar from './Components/TitleBar';
import Messages from './Components/Messages';
import DasMessage from './Components/Message';
import BottomNav from './Components/BottomNav';

import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import AutoComplete from 'material-ui/AutoComplete';


import {List, ListItem} from 'material-ui/List';

import Home from 'material-ui/svg-icons/action/home';
import Account from 'material-ui/svg-icons/action/account-circle';
import Chat from 'material-ui/svg-icons/communication/chat';
import Message from 'material-ui/svg-icons/communication/message';
import Redeem from 'material-ui/svg-icons/action/redeem';
import Providers from 'material-ui/svg-icons/action/supervisor-account';
import Facilities from 'material-ui/svg-icons/social/domain';
import Search from 'material-ui/svg-icons/action/search';
import InsuranceCard from 'material-ui/svg-icons/av/subtitles';
import Rx from 'material-ui/svg-icons/maps/local-pharmacy';
import Hospitals from 'material-ui/svg-icons/maps/local-hospital';
import Children from 'material-ui/svg-icons/places/child-friendly';
import Claims from 'material-ui/svg-icons/action/view-list';

import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {dataSource: [],open: false};
  }


  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  
  
  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div>
        <TitleBar showMenu={this.handleToggle} />
         <Drawer width={200} open={this.state.open} docked={false}>
           <List>
              <ListItem primaryText="Home" leftIcon={<Home />} />
              <ListItem primaryText="Search" leftIcon={<Search />} />
              <ListItem primaryText="Find Providers" leftIcon={<Providers />} />
              <ListItem primaryText="Find Facilities" leftIcon={<Facilities />} />
              <ListItem primaryText="Prescriptions" leftIcon={<Rx />} />
              <ListItem primaryText="Live Chat" leftIcon={<Chat />} />
          </List>
          <Divider />
          <List>
            <ListItem primaryText="My Account" rightIcon={<Account />} />
            <ListItem primaryText="My Messages" rightIcon={<Message />} />
            <ListItem primaryText="My Rewards" rightIcon={<Redeem />} />
            <ListItem primaryText="My Past Claims" rightIcon={<Claims />} />
            <ListItem primaryText="Insurance Card" rightIcon={<InsuranceCard />} />
          </List>
            <MenuItem onTouchTap={this.handleClose}>Close</MenuItem>
        </Drawer>
           <AutoComplete
          hintText="enter a procedure"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Enter a type of care"
          fullWidth={true}
        />

        <h2>Messages</h2>
        <Messages />
        <DasMessage />

        <BottomNav />
      </div>
    );
  }
}

export default App;
