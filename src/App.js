import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import CartProvider from './contexts/CartContext';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <Router>
        <Switch>
          <CartProvider>
            <Route path='/cart' component={Cart} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/' component={Home} exact/>
          </CartProvider>
        </Switch>
    </Router>
  );
}