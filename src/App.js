import React from 'react';
import './App.css';
import Home from './pages/Home'
import Food from './pages/Food'
import { Redirect,Route,Switch,NavLink } from 'react-router-dom'
class App extends React.Component {
  render(){
  return (
      <div className="App">
        <Switch>
          <Route path="/Food" component={ Food }/>
          <Route path="/Home"  component={ Home }/>
          <Redirect from="/" to="/Home"/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
