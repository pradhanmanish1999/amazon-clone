import React from 'react';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';


function App() {
  return (
  <Router>
    <div className='app'>
      <Switch>
      <Route exact path='/login'>      
      <Login/>
      </Route>


      <Route exact path='/checkout'>
      <Header/>
      <Checkout/>
      </Route>

      <Route exact path='/'>
      <Header/>
      <Home/>
      </Route>

      </Switch>
    
    </div>
    </Router>  
  );
}

export default App;
