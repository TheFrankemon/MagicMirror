Module.register("MMM-Keyboard", {
    // Default module config.
    defaults: {
        text: "Touch-screen keyboard",
        width: "400px",
        position: "center",
        refreshInterval: 0
    },

    start: function() {
        if (this.config.refreshInterval > 0) {
            var self = this;
        }
    },

    getStyles: function () {
        return [
            //this.file('css/mmm-simplelogo.css')
        ];
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        var form = document.createElement("form");
        var inputbox = document.createElement("input");
        inputbox.setAttribute("type", "text");
        form.appendChild(inputbox);
        wrapper.appendChild(form);
        Log.info(this.name + " worked.");
        return wrapper;
    }
});
