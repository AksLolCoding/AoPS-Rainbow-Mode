// ==UserScript==
// @name         AoPS Rainbow Mode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Make AoPS rainbow forever (based on april fools joke)
// @author       A_MatheMagician
// @match        https://artofproblemsolving.com/class/3632-woot-code/overview
// @icon         https://www.google.com/s2/favicons?sz=64&domain=artofproblemsolving.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const speed = 7;
    var i = 0, running = true;
    setInterval(function() {
        if (running == true){
            document.body.style.filter = 'hue-rotate(' + (i++) + 'deg)';
        } else{
            document.body.style.filter = '';
        }
    }, speed);
})();
