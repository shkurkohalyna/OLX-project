import {API_OLX} from './url';
import * as refs from './refs';
import templateCard from '../templates/card.hbs';
import fetchCategory from './fetchCategory';

fetchCategory(API_OLX).then(console.log)



