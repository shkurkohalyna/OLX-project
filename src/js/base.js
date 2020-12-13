import { API_OLX } from './url';
import getRefs from './refs';
import templateCard from '../templates/cardset.hbs';
import { load, save, remove } from './localStorage'; 
import {fetchCategory} from './fetch/fetchCategory'; /** */
import { fetchRegistration } from './fetch/fetchRegistration';/** */
import {fetchAuthenticationLogin} from './fetch/fetchAuthenticationLogin';/** */
import { fetchLogout } from './fetch/fetchLogout';
import { fetchCall } from './fetch/fetchCall';
import { fetchGetUser } from './fetch/fetchGetUser';
import { fetchGetUserID } from './fetch/fetchGetUserID';
import { fetchGetFavorites } from './fetch/fetchGetFavorites';
import { fetchGetOwn } from './fetch/fetchGetOwn';
import { fetchGetFind } from './fetch/fetchGetFind';
import { fetchGetSpecificCategory } from './fetch/fetchGetSpecificCategory';
// import { fetchAuthenGoogle } from './fetch/fetchAuthenGoogle'; непонятно как работает?
import { fetchAuthenRefresh } from './fetch/fetchAuthenRefresh';
import { fetchPostCall } from './fetch/fetchPostCall';
import { fetchPostAddFavoriteID } from './fetch/fetchPostAddFavoriteID';


const cardID = '5fd394e86da6ab0017dbf5d4';
const userId = load('UserToken').user.id;
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
console.log(load('UserToken').user.id);
// fetchAuthenGoogle(API_OLX).then(console.log) /**ещё работает */
fetchCall(API_OLX, 1).then(console.log)
fetchCall(API_OLX, 2).then(console.log)
fetchCall(API_OLX, 3).then(console.log)
// fetchGetUser(API_OLX).then(console.log) /**дает данные user по 'key'  */
// fetchGetUserID(API_OLX, userId).then(console.log).catch(console.log) /**дает данные user по 'id'  */
// fetchGetFavorites(API_OLX).then(console.log)
// fetchGetOwn(API_OLX).then(console.log)
// fetchGetFind(API_OLX, searchFind).then(console.log)
// fetchGetSpecificCategory(API_OLX, myCategory).then(console.log) /**находит определённую категорию */
// fetchGetSpecificCategory(API_OLX, myCategory).then(console.log) /**находит определённую категорию */
// fetchAuthenRefresh(API_OLX).then(console.log) /*обновляет 'key','refreshToken','sid'*/
fetchPostAddFavoriteID(API_OLX,cardID).then(console.log) /*добавляет в избраное*/

// fetchLogout(API_OLX).then(console.log) /*выход за Аккаунту и удаляет 'key'*/

fetchCall(API_OLX, 2).then(render => document.querySelector('.cards').innerHTML = templateCard(render.trade)) /**тесловый фич для слайдера и т.д. */

/*ещё не работает*/
const refs = getRefs();
console.log(refs.btnSubmitCreate);
refs.btnSubmitCreate.addEventListener('submit', postSubmitCreate)

async function postSubmitCreate(event) {
    event.preventDefault();
    const dataField = {
        /** заглушка*/
    title: 'Logo',
    description: 'Logo for Instagram',
    category: 'business and services',
    price: 100,
    phone: '+380971468686',
    file: files
    }
    console.log(dataField);
    fetchPostCall(API_OLX, dataField).then(console.log)
    console.log(event.currentTarget);
}