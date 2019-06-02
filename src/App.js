import React, { Component } from 'react';
import Home from './container/Home'
import Deshboard from './container/Deshboard'
import Login from './container/Login'
import NotFound from './container/Notfound'

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom'



class App extends Component {
  renderRouter(){
    return(
      <Router basename="/"> 
          <Switch>
          <Route exact path="/" component={Login}/>
            <Route exact path="/login" component={Login}/>
            <Route  path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
    )
  }
  render() {
    return (
      <div>
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    );
  }
}

export default App;