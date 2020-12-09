import { API_OLX } from './url';
import * as refs from './refs';
import templateCard from '../templates/card.hbs';
import fetchCategory from './fetch/fetchCategory';
import fetchRegistration from './fetch/fetchRegistration';
import fetchAuthenticationLogin from './fetch/fetchAuthenticationLogin';

const newUser = {
    "email": "artiss@example.com",
    "password": "qwerty2020"
};
fetchCategory(API_OLX).then(console.log)
// fetchRegistration(API_OLX, newUser).then(console.log)
fetchAuthenticationLogin(API_OLX, newUser)

async function fetchGetCall(url, dataRegistry) {
  const key = localStorage.getItem('key');
  const options = {
      method: 'POST',
      body: JSON.stringify(dataRegistry),
      headers: {
          'accept': '*/*',
          'Authorization': `Bearer ${key}`,
      },
  }
    const response = await fetch(`${url}/auth/logout`,options);
    const responseJson = await response.json();

    return responseJson
};

fetchGetCall(API_OLX, newUser).then(console.log)