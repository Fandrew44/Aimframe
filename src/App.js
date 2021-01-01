import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import './App.css';
import Play from './components/Play';
import Difficulty from './components/Difficulty';
import Analytics from './components/Analytics';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
            <Switch>
              <Route exact path="/play" component={Play}/>
              <Route exact path="/analytics" component={Analytics}/>
              <Route exact path="/difficulty" component={Difficulty} />
              <Route exact path="/" component={Menu} /> 
            </Switch>
        </div>
      </BrowserRouter> 
    </div>   
  );
}

export default App;
