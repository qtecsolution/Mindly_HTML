// var controller = new ScrollMagic.Controller();

// new ScrollMagic.Scene({
// 	triggerElement: ".event.event2",
// 	triggerHook: "onEnter",
// 	duration: "100%"
// }).setPin(".events-page .event.event1 .pinWrapper",{
// 	pushFollowers: false
// }).addTo(controller);

// new ScrollMagic.Scene({
// 	triggerElement: ".event.event2",
// 	triggerHook: "onEnter",
// 	duration: "200%"
// }).setPin(".events-page .event.event2 .pinWrapper",{
// 	pushFollowers: false
// }).addTo(controller);

// new ScrollMagic.Scene({
// 	triggerElement: ".event.event3",
// 	triggerHook: "onEnter",
// 	duration: "200%"
// }).setPin(".events-page .event.event3 .pinWrapper",{
// 	pushFollowers: false
// }).addTo(controller);

// new ScrollMagic.Scene({
// 	triggerElement: ".event.event4",
// 	triggerHook: "onEnter",
// 	duration: "100%"
// }).setPin(".events-page .event.event4 .pinWrapper",{
// 	pushFollowers: false
// }).addTo(controller);



$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();
	
	// Scene intro - pin the intro section
	// var tween = TweenMax.to(".background-container", 1, {scale:2, opacity:0, ease:Linear.easeNone});
	
	// Scene 1 - pin the second section
	var pinScene01 = new ScrollMagic.Scene({
		triggerElement: '#slide01',
		triggerHook: 0,
		duration: '100%'
	})
	.setPin('#slide01 .pin-wrapper')
	// .addIndicators()
	.addTo(controller);

	// Scene 2 - pin the third section
	var pinScene02 = new ScrollMagic.Scene({
		triggerElement: '#slide01',
		triggerHook: 0,
		duration: '200%'
	})
	.setPin('#slide02 .pin-wrapper')
	.addTo(controller);

	// Scene 3 - pin the fourth section
	var pinScene03 = new ScrollMagic.Scene({
		triggerElement: '#slide02',
		triggerHook: 0,
		duration: '200%'
	})
	.setPin('#slide03 .pin-wrapper')
	.addTo(controller);

	// Scene 4 - pin the fifth section
	var pinScene04 = new ScrollMagic.Scene({
		triggerElement: '#slide03',
		triggerHook: 0,
		duration: '100%'
	})
	.setPin('#slide04 .pin-wrapper')
	.addTo(controller);

});