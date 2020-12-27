import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Aim Trainer!</h1>
      </header>
      <BrowserRouter>
        <div className="App">
            <Menu />
            <Switch>
              <Route exact path="/" component={null} /> 
              <Route exact path="play" component={null}/>
              <Route exact path="analytics" component={null}/>
              <Route exact path="settings" component={null} />
            </Switch>
        </div>
      </BrowserRouter> 
      <footer>
        <h3>Made with luv by Andrew Han :)</h3>
      </footer>
    </div>   
  );
}

export default App;
