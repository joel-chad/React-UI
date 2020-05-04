import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Create from './components/CreateComponent';
import Edit from './components/EditComponent';
import Index from './components/IndexComponent';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div className="App">
          
          <Switch>
              <Route exact path='/' component={Login}/>
              <Route exact path='/home' component={Home}/>
              <Route exact path='/create' component={Create} />
              <Route path='/edit/:id' component={Edit} />
              <Route path='/index' component={Index} />
          </Switch>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
