import React from 'react';
import UserCard from '../UserCard/UserCard';
import { Row, Col } from 'react-bootstrap';

const UsersPage = ({ users, onDelete, activePage, pages, afterDel }) => {

  activePage > pages && pages > 0 ? afterDel(activePage - 1) : afterDel(activePage)

   return (
    <Row>
      { users.map(user => {
        return (
          <Col style={{marginBottom: '15px'}} md={4} key={user.id}>
            <UserCard {...user} onDelete={onDelete} />
          </Col>
        )
      }).slice((activePage - 1) * 5, (activePage - 1) * 5 + 5) }
    </Row>
  )
}

export default UsersPage
