import {
  fetchUsers,
  fetchCountries,
  fetchStates,
  fetchCities,
  postUserData,
} from '../api/api';

// for UserList
export const GET_USERS = 'GET_USERS';
export const CLEAR_USERS = 'CLEAR_USERS';

// for Form
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_STATES = 'GET_STATES';
export const GET_CITIES = 'GET_CITIES';
export const SET_COUNTRY_ID = 'SET_COUNTRY_ID';
export const RESET_COUNTRY_ID = 'RESET_COUNTRY_ID';
export const SET_STATE_ID = 'SET_STATE_ID';
export const RESET_STATE_ID = 'RESET_STATE_ID';
export const SET_CITY_ID = 'SET_CITY_ID';
export const RESET_CITY_ID = 'RESET_CITY_ID';
export const SEND_USER_DATA = 'SEND_USER_DATA';
export const SHOW_SENDING_SPINNER = 'SHOW_SENDING_SPINNER';
export const SET_INPUT_TO_STATE = 'SET_INPUT_TO_STATE';
export const RESET_FORM = 'RESET_FORM';
export const REMOVE_SENDED_STATUS = 'REMOVE_SENDED_STATUS';
// for both
export const SHOW_LOADER = 'SHOW_LOADER';

export const getUsers = () => {
  const users = fetchUsers();

  return {
    type: GET_USERS,
    payload: users,
  };
};

export const clearUsers = () => ({
  type: CLEAR_USERS,
  payload: null,
});

export const showLoader = () => ({
  type: SHOW_LOADER,
  payload: null,
});

export const getCountries = () => {
  const countries = fetchCountries();

  return {
    type: GET_COUNTRIES,
    payload: countries,
  };
};

export const getStates = countryId => {
  // console.log(countryId);
  const states = fetchStates(countryId).then(result => {
    // console.log(result);
    const filteredStates = result.filter(
      state => state.country_id === countryId
    );

    return filteredStates;
  });

  return {
    type: GET_STATES,
    payload: states,
  };
};

export const getCities = cityId => {
  const cities = fetchCities(cityId).then(result => {
    const filteredCities = result.filter(city => city.state_id === cityId);

    return filteredCities;
  });

  return {
    type: GET_CITIES,
    payload: cities,
  };
};

export const setCountryId = countryId => {
  return {
    type: SET_COUNTRY_ID,
    payload: countryId,
  };
};

export const resetCountryId = () => {
  return {
    type: RESET_COUNTRY_ID,
    payload: null,
  };
};

export const setStateId = stateId => {
  return {
    type: SET_STATE_ID,
    payload: stateId,
  };
};

export const resetStateId = () => {
  return {
    type: RESET_STATE_ID,
    payload: null,
  };
};

export const setCityId = cityId => {
  return {
    type: SET_CITY_ID,
    payload: cityId,
  };
};

export const resetCityId = () => {
  return {
    type: RESET_CITY_ID,
    payload: null,
  };
};

export const sendUserData = data => {
  const serverResponse = postUserData(data);

  return {
    type: SEND_USER_DATA,
    payload: serverResponse,
  };
};

export const showSendingSpinner = () => ({
  type: SHOW_SENDING_SPINNER,
  payload: null,
});

export const setInputToState = (name, value) => ({
  type: SET_INPUT_TO_STATE,
  payload: { [name]: value },
});

export const resetForm = () => ({
  type: RESET_FORM,
  payload: null,
});

export const removeSendedStatus = () => ({
  type: REMOVE_SENDED_STATUS,
  payload: null,
});
