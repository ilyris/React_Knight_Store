import React from 'react';
import {Switch,Route} from 'react-router-dom';
import WideNavigation from "./Components/wideNavigation.js";
import PageNotFound from "./Components/PageNotFound.js";
import ProductList from "./Components/ProductList.js";
import Detail from "./Components/Details.js";
import ShoppingCart from "./Components/ShoppingCart.js";

import "./App.css";
const App = () => {
    return (
      <React.Fragment>
        <WideNavigation />
        <Switch>
          <Route path ="/" component={ProductList} />
          <Route path ="/details" component={Detail} />
          <Route path ="/cart" component={ShoppingCart} />
          <Route component={PageNotFound} />
        </Switch>
        <ShoppingCart />
      </React.Fragment>
    );

}

export default App;
