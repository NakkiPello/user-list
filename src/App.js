import React, {Component} from 'react';
import UsersList from './containers/UsersList/UsersList';
import CreateUser from './containers/CreateUser/CreateUser';
import {Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.sass';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Container>
          <UsersList />
          <CreateUser />
        </Container>
      </div>
    );
  }
}
