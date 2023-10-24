/*==================== GRID PARALLAX ====================*/ 
var image = document.getElementsByClassName('parallax');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});