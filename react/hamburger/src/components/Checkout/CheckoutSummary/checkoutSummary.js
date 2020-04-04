import React from 'react';
import Burger from '../../Burger/burger';
import Button from '../../UI/Button/button';
import classes from './checkoutSummary.css';
const checkoutSummary = (props) => {
  return (
      <div className={classes.CheckoutSummary}>
        <h1>We hope it taste well^.^</h1>
        <div style={{width: "100%", margin: "auto"}}>
          <Burger ingredients={props.ingredients} />
          <Button 
          clicked={props.checkoutCancelled}
          btnType="Danger">CANCEL</Button>
          <Button 
          clicked={props.checkoutContinued}
          btnType="Success">CONFIRM</Button>
        </div>
      </div>
  );
};

export default checkoutSummary;
