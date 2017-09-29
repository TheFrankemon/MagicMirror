Module.register("MMM-SimpleLogo", {
    // Default module config.
    defaults: {
        text: "Simple Logo",
        fileUrl: "modules/MMM-SimpleLogo/public/upb.png",
        width: "400px",
        position: "center",
        refreshInterval: 0
    },

    start: function() {
        if (this.config.refreshInterval > 0) {
            var self = this;
            setInterval(function() {
                img = document.querySelector('.simple-logo__container img');
                img.setAttribute('src', self.config.fileUrl + '?' + Date.now());
            }, this.config.refreshInterval);
        }
    },

    getStyles: function () {
        return [
            this.file('css/mmm-simplelogo.css')
        ];
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.className = 'simple-logo__container';
        wrapper.classList.add(this.config.position);
        wrapper.style.width = this.config.width;
        var img = document.createElement("img");
        img.setAttribute('src', this.config.fileUrl);
        wrapper.appendChild(img);
        return wrapper;
    }
});
