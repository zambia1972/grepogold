// ui.js – Gebruikersinterface: popup, tabs, logging

const GrepoBotUI = (() => {
    let logBox;
    let popup;

    function createUI() {
        if (document.getElementById("grepoBotPopup")) return; // al aanwezig

        popup = document.createElement("div");
        popup.id = "grepoBotPopup";
        popup.innerHTML = `
            <style>
                #grepoBotPopup {
                    position: fixed;
                    top: 80px;
                    right: 30px;
                    width: 400px;
                    background: #2c3e50;
                    color: #ecf0f1;
                    border: 2px solid #34495e;
                    padding: 15px;
                    z-index: 99999;
                    font-family: Arial;
                    border-radius: 10px;
                }
                #grepoBotTabs button {
                    background: #34495e;
                    color: white;
                    border: none;
                    margin: 3px;
                    padding: 5px 10px;
                    cursor: pointer;
                    border-radius: 6px;
                }
                #grepoBotTabs button.active {
                    background: #1abc9c;
                }
                #grepoBotContent > div { display: none; }
                #grepoBotContent > div.active { display: block; }
                #grepoBotLog {
                    margin-top: 10px;
                    max-height: 150px;
                    overflow-y: auto;
                    background: #1f2d3a;
                    padding: 5px;
                    font-size: 12px;
                    border-radius: 5px;
                }
            </style>
            <div id="grepoBotTabs">
                <button data-tab="cities">Steden</button>
                <button data-tab="players">Spelers</button>
                <button data-tab="alliances">Allianties</button>
                <button data-tab="gold">GoldBot</button>
            </div>
            <div id="grepoBotContent">
                <div id="tab-cities">[Steden-module komt hier]</div>
                <div id="tab-players">[Spelers-module komt hier]</div>
                <div id="tab-alliances">[Allianties-module komt hier]</div>
                <div id="tab-gold">
                    <button id="startGold">Start GoldBot</button>
                    <button id="stopGold">Stop</button>
                </div>
            </div>
            <div id="grepoBotLog">[Log klaar]</div>
        `;
        document.body.appendChild(popup);

        // tab functionaliteit
        popup.querySelectorAll('#grepoBotTabs button').forEach(btn => {
            btn.addEventListener('click', () => {
                popup.querySelectorAll('#grepoBotTabs button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const tab = btn.getAttribute('data-tab');
                popup.querySelectorAll('#grepoBotContent > div').forEach(d => d.classList.remove('active'));
                popup.querySelector(`#tab-${tab}`).classList.add('active');
            });
        });

        // standaard eerste tab
        popup.querySelector('#grepoBotTabs button').click();

        // goudbot knoppen
        document.getElementById("startGold").addEventListener("click", () => GrepoBotGold.start());
        document.getElementById("stopGold").addEventListener("click", () => GrepoBotGold.stop());

        logBox = document.getElementById("grepoBotLog");
    }

    function toggle() {
        if (!popup) createUI();
        popup.style.display = popup.style.display === "none" ? "block" : "none";
    }

    function log(message) {
        if (!logBox) return;
        const entry = document.createElement("div");
        entry.textContent = new Date().toLocaleTimeString() + ": " + message;
        logBox.appendChild(entry);
        logBox.scrollTop = logBox.scrollHeight;
    }

    // Inject toggle button
    function injectButton() {
        const btn = document.createElement("button");
        btn.textContent = "🤖 GrepoBot";
        btn.style.position = "fixed";
        btn.style.top = "30px";
        btn.style.right = "30px";
        btn.style.zIndex = 99999;
        btn.style.background = "#1abc9c";
        btn.style.border = "none";
        btn.style.padding = "8px 12px";
        btn.style.borderRadius = "8px";
        btn.style.color = "white";
        btn.style.cursor = "pointer";
        btn.addEventListener("click", toggle);
        document.body.appendChild(btn);
    }

    // direct starten
    injectButton();

    return {
        createUI,
        toggle,
        log
    };
})();