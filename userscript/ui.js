// ==UserScript==
// @name         GrepoBot UI Loader
// @namespace    https://grepolis.com/
// @version      1.0
// @description  Laadt het modulaire GrepoBot dashboard in Grepolis
// @author       JouwNaam
// @match        *://*.grepolis.com/*
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Voeg hoofdknop toe
    const toggleBtn = document.createElement("button");
    toggleBtn.id = "grepoBotToggle";
    toggleBtn.textContent = "🤖 GrepoBot";
    document.body.appendChild(toggleBtn);

    // Voeg popupcontainer toe
    const popup = document.createElement("div");
    popup.id = "grepoBotPopup";
    popup.innerHTML = `
        <div id="grepoBotHeader">
            <span id="grepoBotClose">✖</span>
            <h2>GrepoBot Dashboard</h2>
        </div>
        <div id="grepoBotTabs">
            <button data-tab="tab-cities">🏙️ Steden</button>
            <button data-tab="tab-players">👤 Spelers</button>
            <button data-tab="tab-alliances">🛡️ Allianties</button>
            <button data-tab="tab-goldbot">💰 GoldBot</button>
        </div>
        <div id="grepoBotContent">
            <div id="tab-cities" class="grepoBotTab"></div>
            <div id="tab-players" class="grepoBotTab"></div>
            <div id="tab-alliances" class="grepoBotTab"></div>
            <div id="tab-goldbot" class="grepoBotTab"></div>
        </div>
        <pre id="grepoBotLog"></pre>
    `;
    document.body.appendChild(popup);

    // Stijlen
    GM_addStyle(`
        #grepoBotToggle {
            position: fixed;
            top: 120px;
            left: 10px;
            z-index: 9999;
            background-color: #2c3e50;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        #grepoBotPopup {
            display: none;
            position: fixed;
            top: 100px;
            left: 80px;
            width: 700px;
            background: #f9f9f9;
            border: 2px solid #333;
            z-index: 9999;
            padding: 0;
            font-family: Arial;
        }
        #grepoBotHeader {
            background: #34495e;
            color: white;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        #grepoBotClose {
            cursor: pointer;
        }
        #grepoBotTabs button {
            padding: 6px 12px;
            margin: 0;
            border: none;
            background: #ddd;
            cursor: pointer;
        }
        #grepoBotTabs button.active {
            background: #bbb;
        }
        .grepoBotTab {
            display: none;
            padding: 10px;
        }
        .grepoBotTab.active {
            display: block;
        }
        #grepoBotLog {
            background: black;
            color: #00FF00;
            height: 150px;
            overflow-y: auto;
            padding: 10px;
            margin: 0;
        }
    `);

    // Functionaliteit
    $("#grepoBotToggle").on("click", () => $("#grepoBotPopup").show());
    $("#grepoBotClose").on("click", () => $("#grepoBotPopup").hide());
    $("#grepoBotTabs button").on("click", function() {
        const tab = $(this).data("tab");
        $(".grepoBotTab").removeClass("active");
        $("#grepoBotTabs button").removeClass("active");
        $(this).addClass("active");
        $("#" + tab).addClass("active");
    });

    // Globale logger
    unsafeWindow.grepoBotLog = function(msg) {
        const line = `[${new Date().toLocaleTimeString()}] ${msg}\n`;
        $("#grepoBotLog").append(line).scrollTop($("#grepoBotLog")[0].scrollHeight);
    }

    // Init-log
    grepoBotLog("GrepoBot interface geladen. Modules kunnen nu worden geladen.");
})();
