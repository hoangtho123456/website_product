import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from './hoc/layouts/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <p>Test</p>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
