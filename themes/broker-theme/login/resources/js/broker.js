document.onreadystatechange = () => {
    if (document.readyState === "interactive") {
        console.log("document is interactive, starting broker theme logic ...");
        function getCookieValue(name) {
            const regex = new RegExp(`(^| )${name}=([^;]+)`)
            const match = document.cookie.match(regex)

            if (match) {
                return match[2]
            } else {
                return null;
            }
        }

        function setCookie(name,value,days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "")  + expires + "; path=/";
        }

        const aElements = document.getElementsByTagName('a');
        const value = getCookieValue("kc-social-item");
        var valid = true;

        if(value!==null) {
            // persistence cookie set
            // - determine if identified IdP link is valid
            //  - if yes: automate identified IdP link

            const aElement = document.getElementById(value);

            if(aElement===null) {
                console.log("WARNING: Persistence cookie \"kc-social-item\" references non-existing IdP alternative " + value);
                valid = false;
            } else {
                aElement.click();
            }
        }

        if(value===null || !valid) {
            // persistence cookie not set or invalid value
            // - add click handlers to all IdP links

            for (let i = 0; i < aElements.length; i++) {
                console.log("overriding click handler for social link #" + i + " (id=" + aElements.item(i).id + ") ...");
                aElements.item(i).addEventListener("click",
                    function (event) {
                        console.log("setting cookie kc-social-item to " + this.id);
                        event.preventDefault();
                        setCookie("kc-social-item", this.id, 365);
                        window.location = this.href;
                    },
                    false);
            }
        }
    }
};
