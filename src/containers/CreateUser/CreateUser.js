import React, { Component } from 'react';
import axios from '../../axios/axios-users';
import {connect} from 'react-redux';
import { Form, Button } from 'react-bootstrap';

class CreateUser extends Component{

  state = {
    name: '',
    surname: '',
    desc: '',
    avatar: null,
  }

  submitHandler = (event) => {
    event.preventDefault();
    event.target.reset();
  }

  changeHandler = (target, fieldName) => {
    this.setState({
      [fieldName]: target.value,
    })
  }

  createUser = async () => {
    try {
      const response = await axios.post(`/users`, this.state)
      this.props.onCreateUser(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <h2>Create New User</h2>
        <Form.Group controlId="name">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            required
            plateholder="Name"
            name="name"
            onChange={event => this.changeHandler(event.target, 'name')}
          />
        </Form.Group>
        <Form.Group controlId="surname">
          <Form.Label>User Surname</Form.Label>
          <Form.Control
            type="text"
            required
            plateholder="Surname"
            name="surname"
            onChange={event => this.changeHandler(event.target, 'surname')}
          />
        </Form.Group>
        <Form.Group controlId="desc">
          <Form.Label>User Description</Form.Label>
          <Form.Control
            type="text"
            required
            plateholder="Description"
            name="desc"
            onChange={event => this.changeHandler(event.target, 'desc')}
          />
        </Form.Group>
        <Button type="submit" onClick={this.createUser}>
          Create
        </Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  }
}

function mapDispatchProps(dispatch) {
  return {
    onCreateUser: (data) => dispatch({type: 'CREATE_USER', payload: data}),
  }
}

export default connect(mapStateToProps, mapDispatchProps)(CreateUser);

