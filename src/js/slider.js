import Splide from '@splidejs/splide';

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide', {
        start: 2,
        pagination: false,
        arrows: true,
        direction: 'ltr',
        classes: {
            arrows: 'splide__arrows your-class-arrows',
            arrow : 'splide__arrow your-class-arrow',
            prev  : 'splide__arrow--prev your-class-prev',
            next  : 'splide__arrow--next your-class-next',
        },
        perPage: 4,
        perMove: 1,
        gap: 20,
		breakpoints: {
			1279: {
				perPage: 2,
            },
            767: {
                destroy: true, // or 'completely'
            },
		}
	} ).mount();
} );

import { API_OLX } from './url';
import templateCategory from '../templates/category.hbs';
import templateCatSlider from '../templates/category-slider.hbs';
import { fetchGetSpecificCategory } from './fetch/fetchGetSpecificCategory';
import fetchCategory from './fetch/fetchCategory';
import { fetchCall } from './fetch/fetchCall';

// fetchCategory(API_OLX).then(render => document.querySelector('.category-section').innerHTML = templateCategory(render))
// fetchCall(API_OLX, 2).then(render => document.querySelector('.slider').innerHTML = templateCatSlider(render))