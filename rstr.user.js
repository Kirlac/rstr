// ==UserScript==
// @name         Reddit Spoiler Tooltip Remover (RSTR)
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Removes the tooltip that shows when hovering over a spoiler tag on Reddit
// @author       Kirlac
// @match        http*://www.reddit.com/r/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('a[href="/s"]:after { content: attr(data-spoiler) }');
    let els = document.querySelectorAll('a[href="/s"]');
    for (let el of els) {
        let title = el.getAttribute('title');
        if (title !== undefined) {
            el.setAttribute('data-spoiler', title);
            el.removeAttribute('title');
        }
    }
})();
