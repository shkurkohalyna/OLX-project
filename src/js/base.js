import { API_OLX } from './url';
import * as refs from './refs';
import templateCard from '../templates/cardset.hbs';
import { load, save, remove } from './localStorage'; 
import fetchCategory from './fetch/fetchCategory';
import fetchRegistration from './fetch/fetchRegistration';
import fetchAuthenticationLogin from './fetch/fetchAuthenticationLogin';
import { fetchLogout } from './fetch/fetchLogout';
import { fetchCall } from './fetch/fetchCall';
import { fetchGetUser } from './fetch/fetchGetUser';
import { fetchGetFavorites } from './fetch/fetchGetFavorites';
import { fetchGetOwn } from './fetch/fetchGetOwn';
import { fetchGetFind } from './fetch/fetchGetFind';
import { fetchGetSpecificCategory } from './fetch/fetchGetSpecificCategory';
// import { fetchAuthenGoogle } from './fetch/fetchAuthenGoogle'; непонятно как работает?
import { fetchAuthenRefresh as fetchAuthenRefresh } from './fetch/fetchAuthenRefresh';


const newUser = {
    "email": "artiss@example.com",
    "password": "qwerty2020"
};
const searchFind = 'Developer';
const myCategory = 'transport';
fetchCategory(API_OLX).then(console.log)
// fetchRegistration(API_OLX, newUser).then(console.log)
fetchAuthenticationLogin(API_OLX, newUser).then(response => {
    save('key', response.accessToken)
    save('refreshToken', response.refreshToken)
    save('sid', response.sid)
}
    )
fetchAuthenticationLogin(API_OLX, newUser).then(response => { save('UserToken', response) })
console.log(load('UserToken'));
// fetchAuthenGoogle(API_OLX).then(console.log)
fetchCall(API_OLX, 1).then(console.log)
fetchCall(API_OLX, 2).then(console.log)
fetchCall(API_OLX, 3).then(console.log)
fetchGetUser(API_OLX).then(console.log)
fetchGetFavorites(API_OLX).then(console.log)
fetchGetOwn(API_OLX).then(console.log)
fetchGetFind(API_OLX, searchFind).then(console.log)
fetchGetSpecificCategory(API_OLX, myCategory).then(console.log)
fetchAuthenRefresh(API_OLX).then(console.log)

// fetchLogout(API_OLX).then(console.log)

fetchCall(API_OLX, 2).then(render => document.querySelector('.cards').innerHTML = templateCard( render.trade))