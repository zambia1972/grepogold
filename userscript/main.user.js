// ==UserScript==
// @name         GrepoBot Loader
// @namespace    https://grepolis.com/
// @version      1.0
// @description  Laadt alle modules van GrepoBot
// @match        *://*.grepolis.com/*
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://raw.githubusercontent.com/jouwgebruikersnaam/GrepoBot/main/userscript/functions.js
// @require      https://raw.githubusercontent.com/jouwgebruikersnaam/GrepoBot/main/userscript/api.js
// @require      https://raw.githubusercontent.com/jouwgebruikersnaam/GrepoBot/main/userscript/ui.js
// @require      https://raw.githubusercontent.com/jouwgebruikersnaam/GrepoBot/main/userscript/config.js
// @require      https://raw.githubusercontent.com/jouwgebruikersnaam/GrepoBot/main/userscript/goldbot.js
// @require      https://raw.githubusercontent.com/jouwgebruikersnaam/GrepoBot/main/userscript/core.js
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
