import React, {Component} from 'react';
import Aux from '../Aux__/aux';
import style from './layout.css';
import Toolbar from '../../components/Navigation/Toolbar/toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/sideDrawer';
class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  };

  sideDrawerToggleHandler = () => {
    //asyncronously access will create unexpected result
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  };
  
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler} />
        <SideDrawer 
        open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className = {style.Content}>
          {this.props.children}
        </main>
      </Aux>
    );  
  }
};

export default Layout;
