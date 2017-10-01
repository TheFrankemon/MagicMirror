Module.register("MMM-Keyboard", {
	// Default module config.
	defaults: {
		text: "Touch-screen keyboard",
		width: "400px",
		position: "center"
	},

	getScripts: function() {
		return [
			this.file('Keyboard/docs/js/jquery-latest.min.js'),
			this.file('Keyboard/docs/js/jquery-ui.min.js'),
			this.file('Keyboard/js/jquery.keyboard.js')
		];
	},

	getStyles: function () {
		return [
			this.file('Keyboard/docs/css/jquery-ui.min.css'),
			this.file('Keyboard/css/keyboard.css')
		];
	},

	start: function() {
		jQuery(function($) {
			$('#keyboard').keyboard({layout: 'qwerty'});
		});
		Log.log('jQuery Keyboard successfully loaded!');
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		var form = document.createElement("form");
		var inputbox = document.createElement("input");
		inputbox.setAttribute("type", "text");
		inputbox.setAttribute("id", "keyboard");
		inputbox.setAttribute("placeholder", "Enter text...");
		form.appendChild(inputbox);
		wrapper.appendChild(form);
		Log.info(this.name + " worked.");
		return wrapper;
	}
});
