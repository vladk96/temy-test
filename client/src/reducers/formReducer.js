import {
  SHOW_LOADER,
  GET_COUNTRIES,
  GET_STATES,
  GET_CITIES,
  SET_COUNTRY_ID,
  RESET_COUNTRY_ID,
  RESET_STATE_ID,
  SET_STATE_ID,
  SET_CITY_ID,
  RESET_CITY_ID,
  SEND_USER_DATA,
  SHOW_SENDING_SPINNER,
  SET_INPUT_TO_STATE,
  RESET_FORM,
  REMOVE_SENDED_STATUS,
} from '../actions';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  isLoading: false,
  isSending: false,
  sendedStatus: null,
  countryId: null,
  stateId: null,
  cityId: null,
  countries: [],
  states: [],
  cities: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        isLoading: false,
        countries: action.payload,
        states: [],
        cities: [],
      };
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case GET_STATES:
      return {
        ...state,
        states: action.payload,
      };
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    case SET_COUNTRY_ID:
      return {
        ...state,
        countryId: action.payload,
        stateId: null,
        cityId: null,
      };
    case RESET_COUNTRY_ID:
      return {
        ...state,
        countryId: null,
      };
    case SET_STATE_ID:
      return {
        ...state,
        stateId: action.payload,
        cityId: null,
      };
    case RESET_STATE_ID:
      return {
        ...state,
        stateId: null,
      };
    case SET_CITY_ID:
      return {
        ...state,
        cityId: action.payload,
      };
    case RESET_CITY_ID:
      return {
        ...state,
        cityId: null,
      };
    case SEND_USER_DATA:
      return {
        ...state,
        sendedStatus: action.payload.status,
        isSending: false,
      };
    case SHOW_SENDING_SPINNER:
      return {
        ...state,
        isSending: true,
      };
    case SET_INPUT_TO_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_FORM:
      return {
        ...state,
        name: '',
        email: '',
        phone: '',
        address: '',
        about: '',
        stateId: null,
        cityId: null,
        countryId: null,
        sendedStatus: null,
      };
    case REMOVE_SENDED_STATUS:
      return {
        ...state,
        sendedStatus: null,
      };
    default:
      return state;
  }
};
