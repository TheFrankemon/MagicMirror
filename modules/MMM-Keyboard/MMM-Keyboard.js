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
			$('#keyboard').keyboard({
				layout: 'custom',
				customLayout: {
					'default': [
						"q w e r t y u i o p {bksp}",
						"a s d f g h j k l \u00f1 \u0301",
						"z x c v b n m , . -",
						"{accept} {space} {cancel}"
					]
				},
				accepted: function(e, keyboard, el) {
					var username = $('#keyboard').val();
					Log.log("Username is " + username);
					var modules = MM.getModules().withClass('aiclient');
					modules[0].sendSocketNotification("USERNAME", {username:username});
				}
			});
		});
		Log.log('jQuery Keyboard successfully loaded!');
		this.focus = false;
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		var form = document.createElement("form");
		var inputbox = document.createElement("input");
		inputbox.setAttribute("type", "text");
		inputbox.setAttribute("id", "keyboard");
		inputbox.setAttribute("placeholder", "Enter text...");
		if (this.focus) {
			document.getElementById("keyboard").focus();
		}
		form.appendChild(inputbox);
		wrapper.appendChild(form);
		Log.info(this.name + " worked.");
		return wrapper;
	},

	// Override socket notification handler.
	notificationReceived: function(notification, payload, sender) {
		console.log("module received: " + notification)
		var self = this

		if (notification == "focus") {
			this.focus = true;
			Log.info("changed focus");
			this.updateDom();
		}
	}
});
