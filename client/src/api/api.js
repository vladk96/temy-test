import { getFormatedDate } from '../helpers';

const API = {
  link: 'http://localhost:3000/',
  paths: {
    cities: 'cities/',
    countries: 'countries/',
    states: 'states/',
    users: 'users/',
  },
};

const fetchData = url =>
  fetch(url)
    .then(result => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error(result.statusText);
      }
    })
    .catch(error => console.error('Error:', error));

const postData = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(result => result)
    .catch(error => console.error('Error:', error));

const fetchCountry = countryId =>
  fetchData(API.link + API.paths.countries + countryId);

const fetchCity = cityId => fetchData(API.link + API.paths.cities + cityId);

export const fetchState = stateId =>
  fetchData(API.link + API.paths.states + stateId);

export const fetchUsers = async () => {
  const users = await fetchData(API.link + API.paths.users);

  const changedUser = users.map(async user => {
    const city = await fetchCity(user.city_id);
    const country = await fetchCountry(user.country_id);
    const state = await fetchState(user.state_id);
    const formatedDate = getFormatedDate(user.createdAt);

    return {
      ...user,
      city,
      country,
      state,
      createdAt: formatedDate,
    };
  });

  return Promise.all([...changedUser]);
};

export const fetchCountries = () => fetchData(API.link + API.paths.countries);

export const fetchStates = () => fetchData(API.link + API.paths.states);

export const fetchCities = () => fetchData(API.link + API.paths.cities);

export const postUserData = data => {
  const url = API.link + API.paths.users;

  return postData(url, data);
};
