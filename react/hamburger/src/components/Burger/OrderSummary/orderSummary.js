import React, {Component} from 'react';
import Aux from '../../../hoc/Aux__/aux';
import Button from '../../UI/Button/button';

class OrderSummary extends Component {
  //this should be a functional component, doesn't have to be a class
  componentDidUpdate() {
    console.log('component will updated');
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return(
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>
            {igKey}:
          </span>{this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients^^:</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>Total price:</strong> {this.props.price.toFixed(2)}</p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
      </Aux>
    );
  }
}
export default OrderSummary;
