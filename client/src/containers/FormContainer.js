import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getCountries,
  showLoader,
  getStates,
  getCities,
  setCountryId,
  resetCountryId,
  resetStateId,
  setStateId,
  setCityId,
  resetCityId,
  sendUserData,
  showSendingSpinner,
  setInputToState,
  resetForm,
  removeSendedStatus,
} from '../actions';

import RegisterForm from '../components/RegisterForm';

const TIMEOUT = 1000;
const STATUS_CREATED = 201;

class UserListContainer extends Component {
  componentDidMount() {
    this.props.showLoader();
    this.props.getCountries();
  }

  componentDidUpdate(prevProps) {
    const { countryId, stateId, sendedStatus } = this.props;

    if (prevProps.countryId !== countryId && countryId) {
      this.props.getStates(countryId);
    }

    if (prevProps.stateId !== stateId && stateId) {
      this.props.getCities(stateId);
    }

    if (
      prevProps.sendedStatus !== sendedStatus &&
      sendedStatus === STATUS_CREATED
    ) {
      setTimeout(() => {
        this.props.resetForm();
        this.props.removeSendedStatus();
      }, TIMEOUT);
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.props.setInputToState(name, value);
  };

  handleCountryChange = ({ target }) => {
    const countryId = target.value;

    if (!countryId) {
      this.props.resetCountryId();
      this.props.resetStateId();
      this.props.resetCityId();
    } else {
      this.props.setCountryId(countryId);
    }
  };

  handleStateChange = ({ target }) => {
    const stateId = target.value;

    if (!stateId) {
      this.props.resetStateId();
      this.props.resetCityId();
    } else {
      this.props.setStateId(stateId);
    }
  };

  handleCityChange = event => {
    const cityId = event.target.value;

    if (!cityId) {
      this.props.resetCityId();
    }

    this.props.setCityId(cityId);
  };

  handleFormSubmit = event => {
    const {
      countryId,
      stateId,
      cityId,
      name,
      email,
      phone,
      address,
      about,
    } = this.props;
    const objectForRequest = {
      name,
      email,
      phone_number: phone,
      address: address || null,
      about_me: about || null,
      country_id: countryId,
      state_id: stateId,
      city_id: cityId,
    };

    event.preventDefault();

    this.props.showSendingSpinner();

    setTimeout(() => {
      this.props.sendUserData(objectForRequest);
    }, TIMEOUT);
  };

  render() {
    console.log(this.props);
    const {
      name,
      email,
      phone,
      address,
      about,
      countries,
      isLoading,
      states,
      cities,
      stateId,
      countryId,
      cityId,
      isSending,
      sendedStatus,
    } = this.props;

    return (
      <RegisterForm
        name={name}
        email={email}
        phone={phone}
        address={address}
        about={about}
        isLoading={isLoading}
        countries={countries}
        states={states}
        cities={cities}
        countryId={countryId}
        stateId={stateId}
        cityId={cityId}
        handleCountryChange={this.handleCountryChange}
        handleStateChange={this.handleStateChange}
        handleCityChange={this.handleCityChange}
        handleFormSubmit={this.handleFormSubmit}
        isSending={isSending}
        sendedStatus={sendedStatus}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}

const mapStateToProps = state => {
  return state.form;
};

const mapDispatchToProps = {
  getCountries,
  showLoader,
  getStates,
  getCities,
  setCountryId,
  resetCountryId,
  setStateId,
  resetStateId,
  setCityId,
  resetCityId,
  sendUserData,
  showSendingSpinner,
  setInputToState,
  resetForm,
  removeSendedStatus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
