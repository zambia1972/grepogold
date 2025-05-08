// ui.js – UI-componenten, logging, popup en setup voor GrepoBot

const GrepoBotUI = (() => {
    let popup;

    function createButtonPanel() {
        const panel = document.createElement("div");
        panel.id = "grepobot-ui-panel";
        panel.style.position = "fixed";
        panel.style.top = "60px";
        panel.style.left = "10px";
        panel.style.zIndex = 9999;
        panel.style.backgroundColor = "#222";
        panel.style.border = "2px solid #888";
        panel.style.padding = "10px";
        panel.style.borderRadius = "8px";
        panel.style.color = "white";
        panel.style.fontSize = "14px";
        panel.innerHTML = `
            <div style="margin-bottom: 5px;"><b>GrepoBot</b></div>
            <button id="grepobot-open" style="margin-right: 5px;">⚙ Open</button>
            <button id="grepobot-start" style="margin-right: 5px;">▶ Start</button>
            <button id="grepobot-stop">■ Stop</button>
            <div id="grepobot-log" style="margin-top: 10px; max-height: 150px; overflow-y: auto;"></div>
        `;
        document.body.appendChild(panel);

        document.getElementById("grepobot-open").addEventListener("click", togglePopup);
        document.getElementById("grepobot-start").addEventListener("click", () => GrepoBotGold.start());
        document.getElementById("grepobot-stop").addEventListener("click", () => GrepoBotGold.stop());
    }

    function createPopup() {
        popup = document.createElement("div");
        popup.id = "grepobot-popup";
        popup.style.position = "fixed";
        popup.style.top = "120px";
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.zIndex = 10000;
        popup.style.backgroundColor = "#333";
        popup.style.border = "2px solid #888";
        popup.style.padding = "20px";
        popup.style.borderRadius = "10px";
        popup.style.color = "white";
        popup.style.minWidth = "400px";
        popup.style.display = "none";

        popup.innerHTML = `
            <h3>Instellingen</h3>
            <label>Delay (ms): <input id="grepobot-delay" type="number" value="1000" style="width:80px;"></label><br><br>
            <label><input id="grepobot-debug" type="checkbox"> Debug modus</label><br><br>
            <button id="grepobot-save">Opslaan</button>
            <button id="grepobot-close" style="float: right;">Sluiten</button>
        `;
        document.body.appendChild(popup);

        document.getElementById("grepobot-save").addEventListener("click", saveSettings);
        document.getElementById("grepobot-close").addEventListener("click", togglePopup);
    }

    function togglePopup() {
        if (!popup) return;
        popup.style.display = popup.style.display === "none" ? "block" : "none";
    }

    function saveSettings() {
        const delay = parseInt(document.getElementById("grepobot-delay").value, 10);
        const debug = document.getElementById("grepobot-debug").checked;
        localStorage.setItem("grepobot-delay", delay);
        localStorage.setItem("grepobot-debug", debug);
        log("Instellingen opgeslagen.");
        togglePopup();
    }

    function loadSettings() {
        const delay = localStorage.getItem("grepobot-delay") || 1000;
        const debug = localStorage.getItem("grepobot-debug") === "true";
        if (document.getElementById("grepobot-delay")) {
            document.getElementById("grepobot-delay").value = delay;
            document.getElementById("grepobot-debug").checked = debug;
        }
        log("Instellingen geladen.");
    }

    function log(message) {
        const logBox = document.getElementById("grepobot-log");
        if (!logBox) return;
        const entry = document.createElement("div");
        entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        logBox.prepend(entry);
    }

    function init() {
        createButtonPanel();
        createPopup();
        loadSettings();
        log("UI geladen.");
    }

    return {
        init,
        log,
        saveSettings,
        loadSettings
    };
})();

window.addEventListener("load", () => {
    setTimeout(() => {
        GrepoBotUI.init();
    }, 1500);
});
