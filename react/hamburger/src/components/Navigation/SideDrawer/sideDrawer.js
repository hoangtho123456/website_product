import React from 'react';

import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/navigationItems';
import classes from './sideDrawer.css';
import Backdrop from '../../UI/Backdrop/backdrop';
import Aux from '../../../hoc/Aux__/aux';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} >
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuthenticated} />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
