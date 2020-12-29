import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import './App.css';
import Play from './components/Play';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
            <Switch>
              <Route exact path="/play" component={Play}/>
              <Route exact path="/analytics" component={null}/>
              <Route exact path="/difficulty" component={null} />
              <Route exact path="/" component={Menu} /> 
            </Switch>
        </div>
      </BrowserRouter> 
    </div>   
  );
}

export default App;
