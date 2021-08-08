import React, { Component } from 'react';
import './App.css';
import Nav from "./components/nav.component";
import Home from "./components/home.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import axios from 'axios';

export default class App extends Component {

  state () {};
  
  componentDidMount() {
    const config = {
        headers: {
            Authorization: 'bearer ' + localStorage.getItem('token')
        }
    }
    axios.get('auth/profile', config).then(
        res => {
            this.setState({
                user:res.data
            });
        },
        err => {
            console.log(err);
        }
    )
}


  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <div className="auth-wrapper">
            <div className="auth-inner">
              
              <Switch>
                <Route exact path="/" component={() => <Home user={this.state.user}/>} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}

 