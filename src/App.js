import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';

export default function App() {
  return (
    <Router>
        <Switch>
            <Route path='/product/:id' component={Product} />
            <Route path='/' component={Home} />
        </Switch>
    </Router>
  );
}