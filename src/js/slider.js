import Splide from '@splidejs/splide';

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#card-slider', {
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