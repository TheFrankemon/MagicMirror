/* Magic Mirror Config Sample
/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8888,

	language: 'es',
	timeFormat: 24,
	units: 'metric',

	modules: [
	    {
	        module: 'aiclient',
	        position: 'middle_center' // This can be any of the regions.
	    },
	    {
	    	module: 'aiclientdebugger',
	    	position: 'bottom_center'
	    },
	    {
		module: 'clock',
		position: 'bottom_left'
	    },
	    {
	    	module: 'MMM-SimpleLogo',
	    	position: 'top_bar'
	    }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
