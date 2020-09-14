import React, {Component} from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux__/aux';
import Burger from '../../components/Burger/burger';
import BuildControls from '../../components/Burger/BuildControls/buildControls';
import Modal from '../../components/UI/Modal/modal';
import OrderSummary from '../../components/Burger/OrderSummary/orderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index';

// const INGREDIENT_PRICES = {
//   salad: 0.5,
//   cheese: 0.4,
//   meat: 1.3,
//   bacon: 0.7
// };

export class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...};
  // }
  state = {
    // ingredients: null,
    // totalPrice: 4,
    //purchasable: false,
    purchasing: false,
    // loading: false,
    // error: false
  };

  componentDidMount() {
    //console.log(this.props);
    // axios.get('https://react-my-burger-98a01.firebaseio.com/ingredients.json')
    // .then(response => {
    //   this.setState({ ingredients: response.data });
    // }).catch(error => {
    //   this.setState({error: true});
    // });
    this.props.onInitIngredients();
  }

  updatePurchaseState(ingredients) {
    //const ingredients = {...this.state.ingredients};
    //const ingredients = ingredients;
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    // this.setState({
    //   purchasable: sum > 0
    // });
    return sum > 0;
  }
  
  // addIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = { ...this.state.ingredients };
  //   updatedIngredients[type] = updatedCount;
  //   const priceCondition = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceCondition;
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updatedIngredients
  //   });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  // removeIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];

  //   if(oldCount < 0) {
  //     return;
  //   }

  //   const updatedCount = oldCount - 1;
  //   const updatedIngredients = { ...this.state.ingredients };
  //   updatedIngredients[type] = updatedCount;
  //   const priceCondition = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceCondition;
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updatedIngredients
  //   });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  purchaseHandler = () => {
    if(this.props.isAuthenticated) {
      this.setState({purchasing: true}); 
    } else {
      this.props.onSetRedirectPath('/checkout');
      this.props.history.push('/auth');
    }
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
    // alert('You continue!');

    // const queryParams = [];
    // for(let i in this.props.ings) {
    //   queryParams.push(encodeURIComponent(i) + '=' + 
    //   encodeURIComponent(this.props.ings[i]));
    // }
    // queryParams.push('price=' + this.props.price);
    // const queryString = queryParams.join('&');
    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: '?' + queryString
    // });
  };

  render() {
    const disabledInfo = {...this.props.ings};
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    
    let orderSummary = null;
    let burger = this.props.error ? <p>Ingredients can't be loaded!!!</p> : <Spinner />;

    if(this.props.ings) {
      orderSummary = <OrderSummary 
        ingredients={this.props.ings} 
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price = {this.props.price}/>;
      burger = (
        <Aux>
          <Burger ingredients = {this.props.ings} />
          <BuildControls 
            ingredientAdded = {this.props.onIngredientAdded}
            ingredientRemoved = {this.props.onIngredientRemoved}
            disabled = {disabledInfo}
            purchasable = {this.updatePurchaseState(this.props.ings)}
            ordered = {this.purchaseHandler}
            isAuth = {this.props.isAuthenticated}
            price = {this.props.price}
          />
        </Aux>
      );
    }

    // if(this.state.loading) {
    //   orderSummary = <Spinner />;
    // }

    return(
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
    onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit()),
    onSetRedirectPath: (path) => dispatch(burgerBuilderActions.setAuthRedirectPath(path))
    // onIngredientRemoved: (ingName) => dispatch({
    //   type: actionTypes.REMOVE_INGREDIENT,
    //   ingredientsName: ingName
    // })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
