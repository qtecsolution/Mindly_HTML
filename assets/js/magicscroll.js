
/** SCROLL FOR START */
const scrollFor = $('.scroll-for');
const solidBackButton = '<button class="slick-prev slick-arrow"><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.125 11.9678L4.125 24.9713C4.125 29.5013 7.3335 32.3438 11.874 32.3438H24.126C28.6665 32.3438 31.875 29.5163 31.875 24.9713L31.875 11.9678C31.875 7.42275 28.6665 4.59375 24.126 4.59375L11.874 4.59375C7.3335 4.59375 4.125 7.42275 4.125 11.9678Z" stroke="#B7DBD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.8709 18.4688L24.1289 18.4688" stroke="#B7DBD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5166 24.0877L11.8706 18.4657L17.5166 12.8438" stroke="#B7DBD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
const solidNextButton = '<button class="slick-next slick-arrow"><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.875 24.9698L31.875 11.9663C31.875 7.43625 28.6665 4.59375 24.126 4.59375L11.874 4.59375C7.3335 4.59375 4.125 7.42125 4.125 11.9662L4.125 24.9698C4.125 29.5148 7.3335 32.3438 11.874 32.3438L24.126 32.3438C28.6665 32.3438 31.875 29.5148 31.875 24.9698Z" stroke="#409E85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M24.1291 18.4688L11.8711 18.4688" stroke="#409E85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.4834 12.8498L24.1294 18.4718L18.4834 24.0938" stroke="#409E85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';

if(scrollFor.length > 0) {
	scrollFor.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.scroll-nav',
		vertical: true,
  		verticalSwiping: true,
	});

	scrollFor.on('wheel', (function(e) {
		e.preventDefault();

		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickPrev');
		} else {
			$(this).slick('slickNext');
		}
	}));
}
/** SCROLL FOR END */

/** SCROLL NAV START */
const scrollNav = $('.scroll-nav');

if(scrollNav.length > 0) {
	scrollNav.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.scroll-for',
		dots: false,
		arrows: true,
		vertical: true,
		centerMode: true,
		focusOnSelect: true,
		prevArrow: solidBackButton,
		nextArrow: solidNextButton,
  		verticalSwiping: true
	});

	scrollNav.on('wheel', (function(e) {
		e.preventDefault();

		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickPrev');
		} else {
			$(this).slick('slickNext');
		}
	}));
}

/** SCROLL NAV END */