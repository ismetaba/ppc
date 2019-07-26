import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Discover from "./Discover.js";
import MainDetails from "./MainDetails.js";
import MainRegister from "./MainRegister.js";
import Home from "./Home.js";


class App extends React.Component{

  constructor(){
    super();
    this.state={
      detailId:0
    }
    this.details = this.details.bind(this);
  }

  details(detailsId){
    this.setState({ detailId: detailsId }, function () {
    });
  }

  render(){

    return(
      <Router>
        <Switch>
          <Route exact path="/home/:searchKey/:pageNum" component={Discover}  />
          <Route exact path="/discover" component={Home} />
          <Route exact path="/register" component={MainRegister} />
          <Route exact path="/details/:id" component={MainDetails}/>
          <Route exact path="/" component={Discover} />
          <Route exact path="/:pageNum" component={Discover} />

        </Switch>
      </Router>
    )
  }
}

export default App
