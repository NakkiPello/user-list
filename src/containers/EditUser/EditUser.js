import React, { useState } from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../axios/axios-users';

const EditUser = ({ userId }) => {

  const dispatch = useDispatch()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const users = useSelector(state => state.users)
  let user = users.find(user => user.id === userId)

  const [name, setName] = useState(user.name)
  const [surname, setSurname] = useState(user.surname)
  const [desc, setDesc] = useState(user.desc)

  const userState = {
    name,
    surname,
    desc,
    id: userId,
    avatar: null
  }

  const editUser = async () => {
    try {
      const response = await axios.put(`/user/${userId}`, userState)
      dispatch({ type: 'CHANGE_USER', payload: response.data})
      handleClose()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Button data-id={userId} variant="warning" style={{marginRight: '15px'}} onClick={handleShow}>
        Edit User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="name">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              required
              plateholder="Name"
              name="name"
              value={name}
              onChange={event => setName(event.target.value)
              }
            />
          </Form.Group>
          <Form.Group controlId="surname">
            <Form.Label>User Surname</Form.Label>
            <Form.Control
              type="text"
              required
              plateholder="Surname"
              name="surname"
              value={surname}
              onChange={event => setSurname(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="desc">
            <Form.Label>User Description</Form.Label>
            <Form.Control
              type="text"
              required
              plateholder="Description"
              name="desc"
              value={desc}
              onChange={event => setDesc(event.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default EditUser;
