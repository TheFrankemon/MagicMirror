/* Magic Mirror Config Sample
/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8888,
	ipWhitelist: ["127.0.0.1", "::1", "10.0.0.12"],
	language: 'es',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'aiclient',
			position: 'middle_center' // This can be any of the regions.
		},
		{
			module: 'aiclientstatus',
			position: 'bottom_center'
		},
		{
			module: 'clock',
			position: 'bottom_left'
		},
		{
			module: 'MMM-SimpleLogo',
			position: 'top_bar'
		},
		{
			module: 'MMM-Keyboard',
			position: 'lower_third'
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
