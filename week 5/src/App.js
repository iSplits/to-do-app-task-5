import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RegPage from './MyComponents/RegPage';
import LogInPage  from './MyComponents/LogInPage';
import TodoPage from './MyComponents/TodoPage';

import '../src/App.css';

function App () {
  return (
    <div className='root-cont'>
      <Router>
        <Switch>
          <Route path='/' exact component={RegPage} />
          <Route path='/loginPage' component={LogInPage} />
          <Route path='/todoPage' component={TodoPage} />
        </Switch>
      </Router> 
    </div>
  );
};

export default App;
