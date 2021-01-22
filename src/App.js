import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import ChoosePaymentMethod from './pages/ChoosePaymentMethod';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from "./contexts/UserContext";
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <UserProvider>
      <Router>
          <Switch>
            <CartProvider>
              <Route path='/cart' component={Cart} />
              <Route path='/checkout' component={Checkout} />
              <Route path='/paymentMethod' component={ChoosePaymentMethod} />
              <Route path='/product/:id' component={Product} />
              <Route path='/' component={Home} exact/>
            </CartProvider>
          </Switch>
      </Router>
    </UserProvider>
  );
}