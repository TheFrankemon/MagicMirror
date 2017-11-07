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
		this.focus = false;
		this.visible = false;
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		var form = document.createElement("form");
		var inputbox = document.createElement("input");
		inputbox.setAttribute("type", "text");
		inputbox.setAttribute("id", "keyboard");
		inputbox.setAttribute("placeholder", "Enter text...");

		jQuery(function($) {
			$('#keyboard').keyboard({
				layout: 'custom',
				customLayout: {
					'default': [
						"Q W E R T Y U I O P {bksp}",
						"A S D F G H J K L \u00f1 \u0301",
						"Z X C V B N M , . -",
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

		form.appendChild(inputbox);
		wrapper.appendChild(form);

		if (this.visible && this.focus) {
			//document.getElementById("keyboard").style.visibility = "visible";
			$(document).ready(function(){
				$("#keyboard").show();
				$("#keyboard").focus();
			});
		} else if (!this.visible && !this.focus) {
			//document.getElementById("keyboard").style.visibility = "hidden";
			$(document).ready(function(){
				$("#keyboard").blur();
				$("#keyboard").hide();
			});
		} else {
			console.log("Something's weird with the FLAGS")
		}

		return wrapper;
	},

	// Override socket notification handler.
	notificationReceived: function(notification, payload, sender) {
		console.log("module received: " + notification)

		if (notification == "show") {
			this.visible = true;
			Log.info("Visible: ON");
			this.focus = true;
			Log.info("Focused: ON");
			this.updateDom();			
		} else if (notification == "hide") {
			this.focus = false;
			Log.info("Focused: OFF");
			this.visible = false;
			Log.info("Visible: OFF");
			this.updateDom();
		}
	}
});
