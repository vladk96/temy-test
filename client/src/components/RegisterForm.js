import React from 'react';

import {
  Container,
  Row,
  Spinner,
  Form,
  Col,
  Button,
  Alert,
} from 'react-bootstrap';

const STATUS_CREATED = 201;

const RegisterForm = ({
  name,
  email,
  phone,
  address,
  about,
  isLoading,
  countries,
  states,
  cities,
  handleCountryChange,
  handleStateChange,
  handleCityChange,
  handleFormSubmit,
  isSending,
  countryId,
  stateId,
  sendedStatus,
  handleInputChange,
}) => (
  <Container>
    <Row className="justify-content-center">
      {isLoading ? (
        <Spinner animation="border" className="mt-5 mb-5" />
      ) : (
        <Col className="mt-5 mb-5" md={8}>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label>Name *</Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Enter name"
                required
                pattern="^[a-zA-Z\u0400-\u04ff\s]+$"
                title="Must be only letters!"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email *</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone *</Form.Label>
              <Form.Control
                name="phone"
                type="tel"
                value={phone}
                onChange={handleInputChange}
                placeholder="38012345678"
                required
                pattern="^[ 0-9]+$"
                title="Must be only number. Not enter '+'"
                minLength="3"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Country *</Form.Label>
              <Form.Control
                as="select"
                onChange={handleCountryChange}
                required
                name="country"
              >
                <option value="">Choose...</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            {countryId ? (
              <Form.Group>
                <Form.Label>States *</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleStateChange}
                  required
                  name="state"
                >
                  <option value="">Choose...</option>
                  {states.map((state, index) => (
                    <option key={index} value={state.id}>
                      {state.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            ) : null}
            {stateId ? (
              <Form.Group>
                <Form.Label>Cities *</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleCityChange}
                  required
                  name="city"
                >
                  <option value="">Choose...</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            ) : null}
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Victory St"
                name="address"
                value={address}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>About Me</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="about"
                value={about}
                onChange={handleInputChange}
              />
            </Form.Group>
            {sendedStatus ? (
              <Alert
                variant={sendedStatus === STATUS_CREATED ? 'success' : 'danger'}
              >
                {sendedStatus === 201 ? 'User added' : 'Something went wrong'}
              </Alert>
            ) : null}
            <Button
              variant="primary"
              type="submit"
              size="lg"
              disabled={isSending}
            >
              {isSending ? 'Adding…' : 'Add a new user'}
            </Button>
          </Form>
        </Col>
      )}
    </Row>
  </Container>
);

export default RegisterForm;
