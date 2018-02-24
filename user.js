// ==UserScript==
// @name         Reddit Spoiler Tooltip Remover (RSTR)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
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
