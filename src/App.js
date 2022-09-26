import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Stock from './pages/Stock';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import stocks from './components/stock-data';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/about'><About /></Route>
        <Route 
        path="/stocks/:symbol"
        render={(routerProps) => <Stock allStocks={stocks} {...routerProps} />}
      />
        <Route path='/stocks'><Dashboard /></Route>
      </Switch>
    </div>
  );
}

export default App;

