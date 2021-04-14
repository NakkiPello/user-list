import React from 'react'
import { Button, Card } from 'react-bootstrap';
import EditUser from '../../containers/EditUser/EditUser';

const UserCard = ({name, surname, desc, id, onDelete}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Name: <strong>{name}</strong></Card.Title>
        <Card.Title>Surname: <strong>{surname}</strong></Card.Title>
        <Card.Text>Description: <strong>{desc}</strong></Card.Text>
        <EditUser userId={id} />
        <Button variant="danger" onClick={onDelete} data-user-id={id}>Delete User</Button>
      </Card.Body>
    </Card>
  )
}

export default UserCard;
