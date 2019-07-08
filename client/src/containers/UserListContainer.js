import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsers, showLoader, clearUsers } from '../actions';

import UserList from '../components/UserList';

class UserListContainer extends Component {
  componentDidMount() {
    this.props.showLoader();
    this.props.getUsers();
  }

  render() {
    const { users, isLoading } = this.props;

    return <UserList isLoading={isLoading} users={users} />;
  }
}

const mapStateToProps = state => {
  return state.userList;
};

const mapDispatchToProps = {
  getUsers,
  showLoader,
  clearUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
