import React from 'react';
import { Table, Container, Row, Spinner } from 'react-bootstrap';

import TableRow from './TableRow';

const UserList = ({ isLoading, users }) => (
  <Container>
    <Row className="justify-content-center">
      {isLoading ? (
        <Spinner animation="border" className="mt-5 mb-5" />
      ) : (
        <Table striped bordered hover responsive="md" className="mt-5 mb-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <TableRow
                key={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone_number}
                city={user.city.name}
                country={user.country.name}
                state={user.state.name}
                date={user.createdAt}
              />
            ))}
          </tbody>
        </Table>
      )}
    </Row>
  </Container>
);

export default UserList;
