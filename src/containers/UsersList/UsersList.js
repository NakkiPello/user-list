import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from '../../axios/axios-users';
import PaginationElement from '../../components/Pagination/Pagination';
import UsersPage from '../../components/UsersPage/UsersPage';

class UsersList extends Component{

  async componentDidMount () {
    try {
      const response = await axios.get('/users')
      this.props.onLoad(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  handlePageChange = ({ target }) => {
    const buttonType = target.getAttribute('data-name');
    const pageNumber = +target.getAttribute('data-page');
    const { activePage } = this.props;

    switch (buttonType) {
      case 'next':
        this.props.onChangePage(activePage + 1);
        break;
      case 'prev':
        this.props.onChangePage(activePage - 1);
        break;
      case 'page-number':
        this.props.onChangePage(pageNumber)
        break;
      default:
        this.props.onChangePage(activePage)
        break;
    }
  }

  handleDeleteUser = async ({ target }) => {
    try {
      const userID = +target.getAttribute('data-user-id')
      await axios.delete(`/user/${userID}`)
      this.props.onDeleteUser(userID)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { users, pages, activePage} = this.props
    return (
     <>
       <h1>Users List</h1>
       <div style={{textAlign: 'right', marginBottom: '15px'}}>
         Page number: <strong>{activePage}/{pages}</strong>
       </div>
        <UsersPage users={users} onDelete={this.handleDeleteUser} afterDel={this.props.onChangePage} activePage={activePage} pages={pages} />

       <PaginationElement pages={pages} activePage={activePage} onClick={this.handlePageChange} />
     </>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    pages: state.pages,
    activePage: state.activePage
  }
}

function mapDispatchProps(dispatch) {
  return {
    onLoad: (data) => dispatch({type: 'LOAD_USERS', payload: data}),
    onDeleteUser: (data) => dispatch({type: 'DELETE_USER', payload: data}),
    onChangePage: (data) => dispatch({type: 'CHANGE_PAGE', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchProps)(UsersList)
