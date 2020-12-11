import { API_OLX } from './url';
import * as refs from './refs';
import templateCard from '../templates/card.hbs';
// import { load, save, remove } from './localStorage';
import fetchCategory from './fetch/fetchCategory';
import fetchRegistration from './fetch/fetchRegistration';
import fetchAuthenticationLogin from './fetch/fetchAuthenticationLogin';
import { fetchLogout } from './fetch/fetchLogout';
import { fetchCall } from './fetch/fetchCall';
import { fetchGetUser } from './fetch/fetchGetUser';
import { fetchGetFavorites } from './fetch/fetchGetFavorites';

const newUser = {
    "email": "artiss@example.com",
    "password": "qwerty2020"
};
fetchCategory(API_OLX).then(console.log)
// fetchRegistration(API_OLX, newUser).then(console.log)
fetchAuthenticationLogin(API_OLX, newUser).then(response => localStorage.setItem('key', `${response.accessToken}`))
fetchAuthenticationLogin(API_OLX, newUser).then(console.log)
fetchCall(API_OLX, 1).then(console.log)
fetchCall(API_OLX, 2).then(console.log)
fetchCall(API_OLX, 3).then(console.log)
fetchGetUser(API_OLX).then(console.log)
fetchGetFavorites(API_OLX).then(console.log)

// fetchLogout(API_OLX).then(console.log)