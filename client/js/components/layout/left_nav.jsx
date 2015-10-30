"use strict";

import React                from "react";
import { LeftNav }          from "material-ui";
import history              from '../../history';

class LeftNavigation extends React.Component {

  constructor(props, context) {
    super();
    this.state = this.getState(props);
    this.selectedIndex = null;
  }

  getState(props){
    var menuItems = [
      { route: 'home', text: 'Home' }
    ];

    if (props.loggedIn) {
      menuItems.push({ route: 'logout', text: 'Logout' });
      menuItems.push({ route: 'dashboard', text: 'Dashboard' });
      menuItems.push({ route: 'connections', text: 'Connections' });
    } else {
      menuItems.push({ route: 'login', text: 'Sign In' });
      menuItems.push({ route: 'register', text: 'Sign Up' });
    }

    return {
      menuItems: menuItems
    };
  }

  toggle() {
    this.refs.leftNav.toggle();
  }

  _getSelectedIndex() {
    var currentItem;

    for (var i = this.state.menuItems.length - 1; i >= 0; i--) {
      currentItem = this.state.menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
  }

  _onLeftNavChange(e, key, payload) {
    history.pushState({}, payload.route);
  }

  _onHeaderClick() {
    history.pushState({}, "/");
    this.refs.leftNav.close();
  }

  getStyles() {
    return {
      logoStyle: {
        marginTop: '20px'
      }
    };
  }

  render() {
    var styles = this.getStyles();
    var header = <div style={styles.logoStyle} className="logo" onClick={(e) => this._onHeaderClick(e)}>Home</div>;

    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={this.state.menuItems}
        selectedIndex={ (e) => { this._getSelectedIndex() }}
        onChange={(e, key, payload) => this._onLeftNavChange(e, key, payload)} />
    );
  }

}

LeftNavigation.contextTypes = {
  router: React.PropTypes.func.isRequired
};

module.exports = LeftNavigation;
