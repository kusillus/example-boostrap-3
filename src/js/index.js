// function component() {
//   var element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());
// import '../css/index.css';
import '../css/modulo.scss';

$('#btn-hide-filter').click(function() {
	console.log('Click papurro!');
	// $('#filter-form').removeClass('show')
	$('#filter-form').toggleClass('hide')
})
// $('#btn-hide-filter').click(function() {
// 	console.log('Click papurro!');
// 	$('#filter-form').removeClass('hide')
// 	$('#filter-form').addClass('show')
// })
// $('#filter-form').

