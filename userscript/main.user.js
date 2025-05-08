// ==UserScript==
// @name         GrepoBot Loader
// @namespace    https://grepolis.com/
// @version      1.0
// @description  Laadt alle modules van GrepoBot
// @match        *://*.grepolis.com/*
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://raw.githubusercontent.com/zambia1972/grepogold/main/userscript/functions.js
// @require      https://raw.githubusercontent.com/zambia1972/grepogold/main/userscript/api.js
// @require      https://raw.githubusercontent.com/zambia1972/grepogold/main/userscript/ui.js
// @require      https://raw.githubusercontent.com/zambia1972/grepogold/main/userscript/goldbot.js
// @require      https://raw.githubusercontent.com/zambia1972/grepogold/main/userscript/core.js
// @require      https://raw.githubusercontent.com/zambia1972/grepogold/main/userscript/config.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';
    // Laad configuratie en toon de UI
    loadConfig();
    ui.setup();
    // De core-logica wordt in core.js al gestart
})();
